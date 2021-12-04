import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Stats = ({ statsInfo }: any) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3.5 } }}
        exit={{ opacity: 0 }}
        className="stats"
      >
        <div className="stats_info">
          <h1 className="stats_info_title">STATS</h1>
          <div className="stats_info_details">
            {statsInfo.map((stat: any, idx: number) => (
              <div key={idx} className="stats_info_details_detail">
                <div className="stats_info_details_detail_name">
                  {stat.name}
                </div>
                <div className="stats_info_details_detail_value">99</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Stats;
