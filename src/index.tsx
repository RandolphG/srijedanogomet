import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { client } from "./client";
import { Notifications } from "./components";
import { store, history } from "./state-mgmt/store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routing";
import i18next from "i18next";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "./theme/_style.scss";

let persists = persistStore(store);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      {/*<ConnectedRouter history={history}>*/}
      <I18nextProvider i18n={i18next}>
        <PersistGate loading={null} persistor={persists}>
          <Notifications />
          <Router>
            <Routes />
          </Router>
        </PersistGate>
      </I18nextProvider>
      {/*</ConnectedRouter>*/}
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

/*TODO
   push notifications : https://itnext.io/react-push-notifications-with-hooks-d293d36f4836
   player profile page
   team lineup page
   team stats page
 *  */
