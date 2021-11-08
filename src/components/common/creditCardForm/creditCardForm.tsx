import React from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import "./styles/_creditCardFormStyles.scss";
import { selectShowModal } from "../../../state-mgmt/store";
import { BasicInfo, Confirmation, Featured, PaymentInfo } from "./componenets";

/**
 * CreditCard Form
 * @constructor
 */
const CreditCardForm = () => {
  // @ts-ignore
  const show = useSelector(selectShowModal);
  const location = useLocation();

  return (
    <>
      {show && (
        <div className="creditCardForm">
          <div className="modal">
            <div className="modal__container">
              <Featured />
              <Switch location={location} key={location.key}>
                <Route path="/confirmation">
                  <Confirmation />
                </Route>
                <Route path="/payment">
                  <PaymentInfo />
                </Route>
                <Route path="/">
                  <BasicInfo />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreditCardForm;
