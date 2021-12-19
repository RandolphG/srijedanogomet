const express = require("express");
const cors = require("cors");
const graphqlHttp = require("express-graphql").graphqlHTTP;
const mongoose = require("mongoose");
const schema = require("./schema");
const graphqlResolvers = require("./resolvers");
const isAuth = require("./middleware/isAuth");
const app = express();
const host = "0.0.0.0";
const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Authorization"
  );
  if (request.method === "Options") {
    return response.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use(
  "/graphql",
  graphqlHttp({
    schema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

app.use(express.static("build"));

const uri = `mongodb+srv://nogomet:ASDFGFDSA123@cluster0.f466e.gcp.mongodb.net/test?retryWrites=true&w=majority`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then((res) => {
    console.log(res);
    app.listen(port, host, function () {
      console.log(`Server started : port{${port}} host{${host}} `);
    });
  })
  .catch((error) => {
    throw error;
  });

const database = mongoose.connection;

database.on("connected", () => {
  console.log(`connected to Atlas @${database.host}`);
});
