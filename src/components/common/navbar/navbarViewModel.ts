import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const NavbarViewModel = () => {
  let reflow: any = null;
  let historyApp = useHistory();

  function goToLink(link: any) {
    historyApp.push(`/${link}`);
  }

  useEffect(() => {
    const container: HTMLElement | null = document.querySelector(".container");
    const items = document.querySelectorAll(".item");
    let current = 0;
    items.forEach((item, i) =>
      item.addEventListener("click", () => {
        if (container) {
          if (i < current) {
            container.className = "container right instant";
            reflow = container.offsetHeight;
            container.className = `container left pos${i}`;
          } else if (i > current) {
            container.className = "container left instant";
            reflow = container.offsetHeight;
            container.className = `container right pos${i}`;
          }
          current = i;
        }
      })
    );
  });

  const links = [
    { link: "Home", name: "" },
    { link: "About", name: "aboutPage" },
    { link: "Heritage", name: "404" },
    { link: "Genealogy", name: "404" },
    { link: "Donate", name: "404" },
    { link: "Financials", name: "404" },
    { link: "Projects", name: "404" },
  ];

  const motionSettings = {
    initial: { opacity: 0, y: -25 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0, y: -25 },
  };

  return { goToLink, links, motionSettings };
};
