// @ts-nocheck
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotifications,
  requestRemoveNotification,
} from "../../../state-mgmt/store";
import "./styles/_notificationsStyles.scss";
import ErrorBoundary from "../../errorBoundary";

/**
 * @desc Notifications.
 * */
const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(getNotifications);

  function remove(id: string) {
    setTimeout(() => {
      dispatch(requestRemoveNotification(id));
    }, 2500);
  }

  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );

  const NotificationCloseButton = ({ close }: any) => (
    <button onClick={close} className="container_list_item_close">
      <svg width="15" height="15" viewBox="0 0 23 23">
        <Path d="M 3 16.5 L 17 2.5" />
        <Path d="M 3 2.5 L 17 16.346" />
      </svg>
    </button>
  );

  return (
    <ErrorBoundary>
      <div className="notification">
        <div className="notification_container">
          <ul className="notification_container_list">
            <AnimatePresence initial={false}>
              {notifications &&
                notifications.map(
                  (notification: { message: string }, idx: number) => {
                    console.log(`MESSAGE: `, notification);
                    remove(notification.message);
                    return (
                      <motion.li
                        className="notification_container_list_item"
                        key={idx}
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{
                          x: 50,
                          opacity: 0,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <span className="notification_container_list_item_message">
                          {notification.message}
                        </span>
                        <NotificationCloseButton close={() => remove(idx)} />
                      </motion.li>
                    );
                  }
                )}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Notifications;
