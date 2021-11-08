import React from "react";
import { useSessionStorage } from "./useSessionStorage";
import "./styles/_cookieStorageStyles.scss";

/**
 * CookieStorage
 * @constructor
 */
const CookieStorage = () => {
  const [cookiesAccepted, setCookiesAccepted] = useSessionStorage(
    "cookies",
    false
  );

  const onClick = () => setCookiesAccepted(true);

  const Ok = () => (
    <button className="button" onClick={onClick}>
      Accept
    </button>
  );

  if (!cookiesAccepted) {
    return (
      <div className="cookies">
        <h3>Cookies!</h3>
        <p className="cookiesMessage">Cookies make the experience better! 🍪</p>
        <Ok />
      </div>
    );
  }
  return null;
};

export default CookieStorage;
