export const DashboardPageViewModel = () => {
  const products = [
    {
      name: "Playstation Controller",
      price: "59.99",
      imgUrl: "https://assets.codepen.io/285131/ps5-controller.png",
    },
    {
      name: "Apple Watch",
      price: "459.99",
      imgUrl: "https://assets.codepen.io/285131/apple-watch.png",
    },
    {
      name: "Xbox Controller",
      price: "79.99",
      imgUrl: "https://assets.codepen.io/285131/xbox-controller.png",
    },
  ];

  const categories = [
    { name: "Teqnique" },
    { name: "Cosmetics" },
    { name: "Accessories" },
    { name: "Clothing" },
    { name: "Games" },
  ];

  return { products, categories };
};
