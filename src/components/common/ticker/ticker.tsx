import React, { useEffect } from "react";
import "./styles/_tickerStyles.scss";
import { useDispatch } from "react-redux";
import { requestShowModalSuccess } from "../../../state-mgmt/store/system/slice";
const image1 = `https://lorempixel.com/400/200/city/`;

/**
 * Ticker
 * @constructor
 */
const Ticker = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let tme: any = {};

    if (typeof tme.ticker === "undefined" || tme.ticker === null)
      tme.ticker = {
        init: function (ticker: any) {
          let ul = ticker.querySelector("ul");
          let lis = ticker.getElementsByTagName("li");
          let totalWidth = 0;
          let count = lis.length;

          //get the total width that the list items take up
          for (let i = 0; i < count; i++)
            totalWidth -= lis[i].getBoundingClientRect().width;

          //duplicate the li's to allow for a continuous stream
          for (let i = 0; i < count; i++)
            ul.appendChild(lis[i].cloneNode(true));

          console.log(typeof ul.style.animationName);
          ul.style.animationDuration = Math.round(totalWidth / -60) + "s";
          ul.style.animationIterationCount = "infinite";
          ul.style.animationTimingFunction = "linear";
          ul.style.animationName = "ticker";

          // this.insertKeyFrame(totalWidth);
        },

        insertKeyFrame: function (offset: number) {
          let style = document.createElement("style");
          style.appendChild(
            document.createTextNode(this.createKeyFrame("", offset))
          );
          console.log(style);
          document.head.insertBefore(style, document.head.firstChild);
        },

        createKeyFrame: function (venderPrefix: any, offset: number) {
          return [
            "@",
            venderPrefix,
            "keyframes ticker {",
            "0% { transform: translateX(0); }",
            "100% { transform: translateX(",
            Math.round(offset),
            "px); }",
            "}",
          ].join("");
        },
      };

    tme.ticker.init(document.getElementById("ticker"));
  }, []);

  const donators = [
    { name: "Kwame Frimpong", amount: "$12,000" },
    { name: "Jennifer Star", amount: "$1,000" },
    { name: "Mary Jane Campbell", amount: "$1,500" },
    { name: "Adea Baku", amount: "$500" },
    { name: "Steven Wells", amount: "$750" },
    { name: "Randolph Gordon", amount: "$5,750" },
  ];

  const topDonors: any = [
    { name: "Randolph Gordon", amount: "$5,750" },
    { name: "Kwame Frimpong", amount: "$2,000" },
    { name: "Mary Jane Campbell", amount: "$1,500" },
    { name: "Jennifer Star", amount: "$1,000" },
  ];

  function onClick() {
    dispatch(requestShowModalSuccess({ show: true }));
  }

  const EventFlyout = () => (
    <div id="Event-Flyout">
      <div>
        <h2>Top Donors ☆</h2>
        <ul>
          {topDonors.map((donor: any, idx: number) => (
            <li className="EventItem" key={`event-item-${idx}`}>
              <img
                alt="news"
                style={{ maxWidth: "100px", maxHeight: "50px" }}
                src={image1}
              />
              <div style={{ display: "inline-block" }}>
                <div style={{ width: "100%" }}>{donor.name}</div>
                <div style={{ width: "100%" }}>{donor.amount}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const TickerContainer = () => (
    <div id="tickerContainer">
      <div id="ticker">
        <h1 onClick={onClick}>Donate</h1>
        <div className="ticker-content">
          <ul
            style={{
              animationDuration: "20s",
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
              animationName: "ticker",
            }}
          >
            {donators.map((donator: any, idx: number) => (
              <li key={`donators-${idx}`}>
                <span className="eventDate">{donator.name}</span>
                <span className="amount">{donator.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="tickerContainer">
      <div id="flyoutContainer">
        <EventFlyout />
        <TickerContainer />
      </div>
    </div>
  );
};

export default Ticker;
