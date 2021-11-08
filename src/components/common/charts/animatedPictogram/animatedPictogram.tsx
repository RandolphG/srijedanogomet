import React, { useEffect } from "react";
import * as d3 from "d3";
import "./styles/_animatedPictogramStyles.scss";

const AnimatedPictogram = () => {
  useEffect(() => {
    // Reference: https://lvngd.com/blog/building-pictogram-grids-d3js/

    let drawChart = function () {
      /* DEFINE CHART SETTINGNS *************************************************************/

      // Font Style
      let fontFamily = "Comfortaa",
        cursive;
      let fontSize = 40;

      // SVG Size & Style
      const width = 450;
      const height = 450;
      const margin = 90 * 2;
      const innerWidth = width - margin;
      const innerHeight = height - margin;
      let bgColor = "None";

      // Circle Style
      let fill = "white";
      let inactiveOpacity = 0.22;
      let r = 12;

      // Grid Format
      let numRows = 10;
      let numCols = 10;

      // Animation
      let delay = 100;

      /* DEFINE DATA ************************************************************************/

      // The share of circles that should be highlighted
      let percentNumber = 24;

      // Generate the circles data: array of indices + "active" info for each cell in the grid
      let data: any[] = [];
      d3.range(numCols * numRows).forEach(function (d) {
        data.push({
          index: d,
          percentNumber: d + 1,
          active: d < percentNumber,
        });
      });

      /* CREATE SVG  ************************************************************************/

      // Create SVG container
      let svg = d3
        .select("#pictogram-chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("background-color", bgColor);

      const rangeNumRows: any = d3.range(numRows);
      const rangeNumCols: any = d3.range(numCols);

      // Create axes with ranges referencing the number of rows and columns
      let y: any = d3.scaleBand().range([0, innerHeight]).domain(rangeNumRows);
      let x: any = d3.scaleBand().range([0, innerWidth]).domain(rangeNumCols);

      // Create container for the grid
      let circleGrid = svg
        .append("g")
        .attr("transform", `translate(${margin / 2 + 15}, ${margin / 2 + 20})`);

      // Append circles to grid container & stlyle them accorting to the data & percentNumber
      let circles: any = circleGrid
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("id", function (d) {
          return "id" + d.index;
        })
        .attr("cx", function (d) {
          return x(d.index % numCols);
        })
        .attr("cy", function (d) {
          return y(Math.floor(d.index / numCols));
        })
        .attr("r", r)
        .attr("fill", fill)
        .attr("opacity", inactiveOpacity)
        // Add transition that highlights one circle at a time
        .transition()
        .delay((d, i) => i * delay)
        .attr("opacity", (d) => (d.active ? 1 : inactiveOpacity));

      // Create container for the percentage text
      let textGrid = svg
        .append("g")
        .attr("transform", `translate(${width - margin / 2}, ${margin / 2})`);

      let texts: any = textGrid
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => (d.active ? d.percentNumber + "%" : ""))
        .attr("text-anchor", "end")
        .attr("opacity", 0)
        .attr("font-family", fontFamily)
        .attr("fill", fill)
        .attr("font-size", fontSize * 0.8)
        // Add transition that fades in the counter
        .transition()
        .delay((d, i) => i * delay)
        .attr("opacity", 1)
        .attr("font-size", (d) =>
          d.percentNumber < percentNumber ? fontSize * 0.8 : fontSize
        )
        // Add transition that fades out the counter
        .transition()
        .delay((d, i) => i / delay)
        .attr("opacity", (d) => (d.percentNumber < percentNumber ? 0 : 1));
    };

    // Call function to draw the chart once window load is complete
    window.addEventListener("load", drawChart);
  });
  return (
    <div id="pictogram-container">
      <div id="pictogram-chart" />
    </div>
  );
};

export default AnimatedPictogram;
