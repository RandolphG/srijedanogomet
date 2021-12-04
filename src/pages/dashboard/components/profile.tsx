import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Profile = ({ profileInfo }: any) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3.5 } }}
        exit={{ opacity: 0 }}
        className="profile"
      >
        <div className="profile_info">
          <div className="profile_info_title">PROFILE</div>
          <div className="profile_info_container">
            <div className="profile_info_container_details">
              {profileInfo.map((info: any, idx: number) => (
                <div
                  key={idx}
                  className="profile_info_container_details_detail"
                >
                  <div className="profile_info_container_details_detail_name">
                    {info.name}
                  </div>
                  <div className="profile_info_container_details_detail_value">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
            <div>ACHIEVEMENTS</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Profile;
