import React, { useEffect } from "react";
import * as d3 from "d3";

const AnimatedBar = () => {
  useEffect(() => {
    let drawBarChart = function () {
      /* DEFINE CHART SETTINGNS *************************************************************/

      // Font Style
      let fontFamily = "Comfortaa",
        cursive;
      let fontSize = 35;

      // SVG Size & Style
      const width = 450;
      const height = 450;
      const widthOffset = 80;
      const heightOffset = widthOffset * 1.2;
      const innerWidth = width - widthOffset * 2;
      const innerHeight = height - heightOffset * 2;

      // Circle Style
      let fill = "white";

      // Animation
      let delay = 200;

      /* DEFINE DATA ************************************************************************/

      let data = [
        { key: "A", value: 10 },
        { key: "B", value: 7 },
        { key: "C", value: 6 },
        { key: "D", value: 4 },
      ];

      /* CREATE SVG  ************************************************************************/

      // Create SVG container
      let svg = d3
        .select("#bar-chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      // Create axes
      let x: any = d3.scaleBand().range([0, innerWidth]);
      let y: any = d3.scaleLinear().range([innerHeight, 0]);

      // Scale the range of the data
      x.domain(
        data.map((d: any) => {
          return d.key;
        })
      );

      const domain: any = [
        0,
        d3.max(data, function (d) {
          return d.value;
        }),
      ];
      y.domain(domain);

      // Create container for the grid
      let barGrid = svg
        .append("g")
        .attr("transform", `translate(${widthOffset},${heightOffset})`);

      // Calculate Bar Width
      let barWidth = (innerWidth / data.length) * 0.8;

      // Add bars to the bar grid
      barGrid
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function (d: any) {
          return x(d.key);
        })
        .attr("y", function (d) {
          return y(d.value);
        })
        .attr("ry", 10)
        .attr("height", function (d) {
          return innerHeight - y(d.value);
        })
        .attr("width", () => {
          return barWidth;
        })
        .attr("fill", fill)
        .attr("opacity", 0.2)
        // Add transition that fades in the bars
        .transition()
        .delay((d, i) => i * delay)
        .attr("opacity", 1);

      // Append value as text to the end of each bar
      barGrid
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d.value)
        .attr("x", (d: any) => x(d.key) + barWidth * 0.5)
        .attr("y", (d) => y(d.value) - 15)
        .attr("text-anchor", "middle")
        .attr("font-family", fontFamily)
        .attr("fill", fill)
        .attr("font-size", fontSize * 0.0)
        .attr("opacity", 0)
        // Add transition that fades in the numbers
        .transition()
        .delay((d, i) => i * delay)
        .attr("font-size", fontSize)
        .attr("opacity", 1);
    };

    // Call function to draw the chart once window load is complete
    window.addEventListener("load", drawBarChart);
  });

  return (
    <div id="bar-chart-container">
      <div id="bar-chart" />
    </div>
  );
};

export default AnimatedBar;
