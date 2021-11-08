import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router-dom";
import { containerVariants } from "../../motionSettings";

export const PaymentInfo = () => {
  let historyApp = useHistory();

  const onClick = () => {
    historyApp.push("/confirmation");
  };

  return (
    <motion.div
      className="modal__content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Your payment details</h2>
      <form>
        <ul className="form-list">
          <li className="form-list__row">
            <label>Name</label>
            <input type="text" name="" required />
          </li>
          <li className="form-list__row">
            <label>Card Number</label>
            <input type="text" name="cc_number" required />
          </li>
          <li className="form-list__row form-list__row--inline">
            <div>
              <label>CVC</label>
              <input
                type="text"
                name="cc_cvc"
                placeholder="123"
                pattern="\\d*"
                minLength={3}
                maxLength={4}
                required
              />
            </div>
          </li>
          <li className="form-list__row form-list__row--agree">
            <label>
              <input type="checkbox" name="save_cc" checked />
              Save my card for future purchases
            </label>
          </li>
          <li>
            <button type="submit" className="button" onClick={onClick}>
              Pay Now
            </button>
          </li>
        </ul>
      </form>
    </motion.div>
  );
};
