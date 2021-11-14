// @ts-nocheck
import { Chart } from "chart.js";
import { useEffect } from "react";

export const StatisticsPageViewModel = () => {
  const lineChartData: any = {
    labels: [
      "1PM",
      "",
      "2PM",
      "",
      "3PM",
      "",
      "4PM",
      "",
      "5PM",
      "",
      "6PM",
      "",
      "7PM",
    ],
    options: {
      animation: {
        duration: 2000,
      },
    },
    datasets: [
      {
        label: "My Second dataset",
        fillColor: "#180e26",
        strokeColor: "#503e7a",
        pointColor: "#503e7a",
        pointStrokeColor: "#503e7a",
        pointHighlightFill: "#503e7a",
        pointHighlightStroke: "#503e7a",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(80,80,105,0.2)",
        strokeColor: "#7affec",
        pointColor: "#7affec",
        pointStrokeColor: "#7affec",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#fff",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
      },
    ],
  };

  const options: any = {
    data1: [
      {
        value: randomScalingFactor(),
        color: "#f95084",
      },
      {
        value: randomScalingFactor(),
        color: "#342652",
      },
    ],
    data2: [
      {
        value: randomScalingFactor(),
        color: "#50f9d2",
      },
      {
        value: randomScalingFactor(),
        color: "#342652",
      },
    ],
    data3: [
      {
        value: randomScalingFactor(),
        color: "#8ef950",
      },
      {
        value: randomScalingFactor(),
        color: "#342652",
      },
    ],
    data4: [
      {
        value: randomScalingFactor(),
        color: "#f97d50",
      },
      {
        value: randomScalingFactor(),
        color: "#342652",
      },
    ],
  };

  function randomScalingFactor() {
    return Math.round(Math.random() * 100);
  }

  useEffect(() => {}, []);

  return { lineChartData, Chart, options };
};
