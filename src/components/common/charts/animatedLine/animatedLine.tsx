import React, { useEffect } from "react";
import * as d3 from "d3";

/**
 * @description Animated Line
 * https://observablehq.com/@blosky/animated-line-chart
 */
const AnimatedLine = () => {
  useEffect(() => {
    const drawChart = () => {
      /* Font Style */
      let fontFamily = "Comfortaa";
      let fontSize = 35;

      /* SVG Size & Style */
      const width = 600;
      const height = 600;
      const margin = 100 * 5;
      const innerWidth = width - margin;
      const innerHeight = height - margin;
      let bgColor = "None";

      /* Line, Circle & Text Style */
      let fill = "white";
      const strokeWidth = 6;
      const circleRadius = 10;
      const labelMargin = 30;

      /* Animation */
      let delay = 400;

      /* DEFINE DATA */

      const dateFormat = d3.timeParse("%Y-%m-%d");
      let data: any = [
        { key: dateFormat("2021-01-01"), value: 0 },
        { key: dateFormat("2021-01-02"), value: 6 },
        { key: dateFormat("2021-01-03"), value: 4 },
        { key: dateFormat("2021-01-04"), value: 12 },
        { key: dateFormat("2021-01-05"), value: 9 },
        { key: dateFormat("2021-01-06"), value: 15 },
        { key: dateFormat("2021-01-07"), value: 24 },
        { key: dateFormat("2021-01-08"), value: -12 },
        { key: dateFormat("2021-01-09"), value: 3 },
      ];

      /* CREATE SVG */

      /* Create SVG container */
      let svg = d3
        .select("#line-chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("background-color", bgColor);

      /* Create container for the pie */
      let lineGroup = svg
        .append("g")
        .attr("transform", `translate( ${margin / 2} ,${margin / 2} )`);

      /* Create axes & scale the range of the data */
      let x = d3
        .scaleTime()
        .range([0, innerWidth / 4])
        .domain(data.map((d: any) => d.key));

      const number = d3.max(data, (d: any) => d.value);
      const domain: any = [0, number];
      console.log(`domain`, domain);

      let y = d3.scaleLinear().range([innerHeight, 0]).domain(domain);

      /* Create path generator */
      let line = d3
        .line()
        .x((d: any) => x(d.key))
        .y((d: any) => y(d.value));

      /* Create function for the line transition */
      let tweenDash = () => {
        // @ts-ignore
        // const l = document.getElementById("line-chart").getTotalLength()!;
        const l: any = lineGroup.getTotalLength()!;
        console.log(`length`, l);
        const i = d3.interpolateString("0," + l, l + "," + l);
        return (t: any) => i(t);
      };

      /* Create a path for each slice using the arc function */
      let path = lineGroup
        .append("path")
        .datum(data)
        .attr("d", line)
        .attr("class", "line-chart-path")
        .attr("fill", "none")
        .attr("stroke", fill)
        .attr("stroke-width", strokeWidth)
        .attr("stroke-linecap", "round")
        .attr("class", "simple-line")
        .transition()
        .duration(delay * data.length)
        .attrTween("stroke-dasharray", tweenDash);

      /* Add dots at the beginning/ end of each line section */
      let circles = lineGroup
        .append("g")
        .selectAll("dot")
        .data(data)
        .join("circle")
        .attr("cx", (d: any) => x(d.key))
        .attr("cy", (d: any) => y(d.value))
        .attr("r", circleRadius)
        .attr("fill", fill)
        .attr("opacity", 0.2)
        .transition()
        .delay((d, i) => i * delay)
        .attr("opacity", 1)
        .attr("r", circleRadius * 1.2)
        .transition()
        .delay((d, i) => i * delay * 0.1)
        .attr("r", circleRadius);

      /* Label all dots with their value */
      let labels = lineGroup
        .append("g")
        .selectAll("text")
        .data(data)
        .join("text")
        .text((d: any) => d.value)
        .attr("x", (d: any) => x(d.key) - 18)
        .attr("y", (d: any, i) => y(d.value) + getYMargin(data, d, i))
        .attr("fill", fill)
        .attr("font-family", fontFamily)
        .attr("opacity", 0)
        .attr("font-size", fontSize * 0.5)
        .transition()
        .delay((d, i) => i * delay)
        .attr("opacity", 1)
        .attr("font-size", fontSize * 1.2)
        .transition()
        .delay((d, i) => i * delay * 0.1)
        .attr("font-size", fontSize);

      /* Helper function that determines if the value label should be placed above or below the line */
      function getYMargin(data: any, d: any, i: any) {
        /* If the text labels a peak place the value above the line otherwise below */
        if (i === 0 || (data[i - 1] && data[i - 1].value < d.value)) {
          return -1 * labelMargin;
        } else {
          return +50;
        }
      }
    };

    /* Call function to draw the chart once window load is complete */
    window.addEventListener("load", drawChart);
  });

  return (
    <div id="line-chart-container">
      <div id="line-chart" />
    </div>
  );
};

export default AnimatedLine;
