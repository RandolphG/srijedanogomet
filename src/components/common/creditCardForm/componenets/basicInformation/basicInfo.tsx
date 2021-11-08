import { motion } from "framer-motion";
import React from "react";
import { useHistory } from "react-router-dom";
import { buttonVariants, containerVariants } from "../../motionSettings";

/**
 * BasicInfo
 * @constructor
 */
export const BasicInfo = () => {
  let historyApp = useHistory();

  const onClick = () => {
    historyApp.push("/payment");
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="modal__content"
    >
      <h2>Basic Info</h2>
      <form>
        <ul className="form-list">
          <motion.li className="form-list__row" variants={buttonVariants}>
            <label>NAME</label>
            <input type="text" name="" />
          </motion.li>
          <li className="form-list__row">
            <label>EMAIL ADDRESS</label>
            <input type="text" name="cc_number" />
          </li>
          <li className="form-list__row">
            <label>STREET ADDRESS</label>
            <input type="text" name="cc_number" />
          </li>
          <li className="form-list__row form-list__row--inline">
            <div className="inline-row">
              <div className="inline-row-content">
                <label>CITY</label>
                <div className="form-list__input-inline">
                  <input
                    type="text"
                    name="cc_month"
                    placeholder=""
                    pattern="\\d*"
                    minLength={2}
                    maxLength={4}
                  />
                </div>
              </div>
              <div className="inline-row-content">
                <label>STATE</label>
                <div className="form-list__input-inline">
                  <input
                    type="text"
                    name="cc_month"
                    placeholder=""
                    pattern="\\d*"
                    minLength={2}
                    maxLength={4}
                  />
                </div>
              </div>
              <div className="inline-row-content">
                <label>ZIPCODE</label>
                <div className="form-list__input-inline">
                  <input
                    type="text"
                    name="cc_month"
                    placeholder=""
                    pattern="\\d*"
                    minLength={2}
                    maxLength={4}
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <button type="submit" className="button" onClick={onClick}>
              NEXT
            </button>
          </li>
        </ul>
      </form>
    </motion.div>
  );
};
