// @ts-nocheck---

import React, { useEffect, useRef } from "react";
import "./styles/_statisticsPageStyles.scss";
import { StatisticsPageViewModel } from "./statisticsPageViewModel";

/**
 * @description StatisticPage component
 * @constructor
 */
const StatisticsPage = () => {
  let pieChart1;
  let pieChart2;
  let pieChart3;
  let pieChart4;
  const { lineChartData, Chart, options } = StatisticsPageViewModel();

  const BodyStatisticChart = () => {
    const ref = useRef(null);
    let chart;

    useEffect(() => {
      if (ref && ref.current) {
        chart = new Chart(ref.current, lineChartData);
      }
    }, []);

    return (
      <div className="bodychart">
        <canvas ref={ref} className="chart" id="chart" />
      </div>
    );
  };

  const PieChart1 = () => {
    const ref = useRef(null);

    useEffect(() => {
      if (ref && ref.current) {
        pieChart1 = new Chart(ref.current, options.data1);
      }
    }, []);

    return (
      <div className="pie1">
        <canvas ref={ref} id="doug1" />
        <h2>ORGANIC</h2>
        <h3>17%</h3>
      </div>
    );
  };

  const PieChart2 = () => {
    const ref = useRef(null);

    useEffect(() => {
      if (ref && ref.current) {
        pieChart2 = new Chart(ref.current, options.data2);
      }
    }, []);

    return (
      <div className="pie2">
        <canvas ref={ref} id="doug2" />
        <h2>SOCIAL</h2>
        <h3>43%</h3>
      </div>
    );
  };

  const PieChart3 = () => {
    const ref = useRef(null);

    useEffect(() => {
      if (ref && ref.current) {
        pieChart3 = new Chart(ref.current, options.data3);
      }
    }, []);

    return (
      <div className="pie3">
        <canvas ref={ref} id="doug3" />
        <h2>KEYWORD</h2>
        <h3>68%</h3>
      </div>
    );
  };

  const PieChart4 = () => {
    const ref = useRef(null);

    useEffect(() => {
      if (ref && ref.current) {
        pieChart4 = new Chart(ref.current, options.data4);
      }
    }, []);

    return (
      <div className="pie4">
        <canvas ref={ref} id="doug4" />
        <h2>KEYWORD</h2>
        <h3>68%</h3>
      </div>
    );
  };

  return (
    <article className="screen">
      <div className="header">
        <i className="fa fa-reorder fa-lg" />
        <p className="title">Insights</p>
        <i className="fa fa-repeat fa-lg" />
      </div>

      <div className="header2">
        <div className="active section">NEW</div>
        <div className="section">5H AGO</div>
        <div className="section">MORNING</div>
      </div>

      <BodyStatisticChart />
      <div className="pies">
        <PieChart1 />
        <PieChart2 />
        <PieChart3 />
        <PieChart4 />
      </div>

      <div className="footer">
        <div className="counter1">
          28 674
          <h4>REAL TIME</h4>
        </div>
        <div className="counter2">
          83 763
          <h4>ALL TIME</h4>
        </div>
        <i className="fa fa-sign-out fa-2x" />
      </div>
    </article>
  );
};

export default StatisticsPage;
