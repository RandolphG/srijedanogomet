import { svg } from "../../resources";

export const DashboardPageViewModel = () => {
  const payments = [
    {
      color: "green",
      date: "01/22",
      cardNumber: ".... 4012",
      title: "Internet",
      amount: "$2,110",
    },
    {
      color: "olive",
      date: "12/23",
      cardNumber: ".... 2228",
      title: "Universal",
      amount: "$5,610",
    },
    {
      color: "gray",
      date: "03/22",
      cardNumber: ".... 5214",
      title: "Internet",
      amount: "$3,473",
    },
  ];

  const transfers = [
    {
      label: "Apple Inc.",
      subLabel: "Apple ID Payment",
      date: "28 Oct. 21",
      alt: "apple",
      svg: svg.apple,
      cardDigits: "4012",
      amount: "- $ 550",
    },
    {
      label: "Pinterest",
      subLabel: "2 year subscription",
      date: "26 Oct. 31",
      alt: "pinterest",
      svg: svg.pinterest,
      cardDigits: "4352",
      amount: "- $ 150",
    },
    {
      label: "Warner Bros",
      subLabel: "Cinema",
      date: "26 Oct. 31",
      alt: "pinterest",
      svg: svg.warnerBros,
      cardDigits: "4012",
      amount: "- $ 550",
    },
  ];

  const sideNavigationLinks = [
    {
      name: "Dashboard",
      link: "#",
      className: "browsers",
    },
    {
      name: "Schedule",
      link: "#",
      className: "check-square",
    },
    {
      name: "Transfers",
      link: "#",
      className: "swap",
    },
    {
      name: "Templates",
      link: "#",
      className: "file-text",
    },
    {
      name: "SWIFT",
      link: "#",
      className: "globe",
    },
    {
      name: "Exchange",
      link: "#",
      className: "clipboard-text",
    },
  ];

  const tiles = [
    {
      className: "lightning-light",
      label: "Electricity",
      subLabel: "UrkEnergo LTD.",
    },
    {
      className: "fire-simple-light",
      label: "Heating Gas",
      subLabel: "Gazprom UA",
    },
    {
      className: "file-light",
      label: "Tax online",
      subLabel: "Kharkov 62 str.",
    },
  ];

  return {
    payments,
    sideNavigationLinks,
    tiles,
    transfers,
  };
};
