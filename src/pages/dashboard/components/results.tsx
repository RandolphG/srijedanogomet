import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Results = ({ resultsInfo }: any) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3.5 } }}
        exit={{ opacity: 0 }}
        className="results"
      >
        <div className="results_info">
          <div className="results_info_title">RESULTS</div>
          <div className="results_info_stats">
            <div className="results_info_stats_results">
              {resultsInfo.map((result: any, idx: number) => (
                <div className="results_info_stats_results_detail" key={idx}>
                  <div className="results_info_stats_results_detail_name">
                    {result.name}
                  </div>
                  <div className="results_info_stats_results_detail_name">
                    {result.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="results_info_stats_rating">
              <div className="results_info_stats_rating_title">
                AVERAGE RATING
              </div>
              <div className="results_info_stats_rating_value">90</div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Results;
