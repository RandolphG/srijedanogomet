import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router-dom";
import { buttonVariants, containerVariants } from "../../motionSettings";

/**
 * Confirmation
 * @constructor
 */
export const Confirmation = () => {
  let historyApp = useHistory();

  const onClick = () => {
    historyApp.push("/");
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="modal__content"
    >
      <h2>CONFIRM PAYMENT</h2>
      <form>
        <ul className="form-list">
          <motion.li className="form-list__row" variants={buttonVariants}>
            <label>NAME</label>
            <input type="text" name="" required />
          </motion.li>
          <li>
            <button type="submit" className="button" onClick={onClick}>
              CONFIRM
            </button>
          </li>
        </ul>
      </form>
    </motion.div>
  );
};
