import React, { useEffect } from "react";
import * as d3 from "d3";
import { ErrorBoundary } from "../../../index";
/**
 * Radial Chart
 */
const RadialChart = () => {
  useEffect(() => {
    //based on https://bl.ocks.org/mbostock/1096355
    //apple design:https://images.apple.com/watch/features/images/fitness_large.jpg
    "use strict";

    let gap = 2;

    let ranDataset = function () {
      let ran = Math.random();

      return [
        { index: 0, name: "move", icon: "\uF105", percentage: ran * 60 + 30 },
        {
          index: 1,
          name: "exercise",
          icon: "\uF101",
          percentage: ran * 60 + 30,
        },
        {
          index: 2,
          name: "stand",
          icon: "\uF106",
          percentage: ran * 60 + 30,
        },
      ];
    };

    let ranDataset2 = function () {
      let ran = Math.random();

      return [
        { index: 0, name: "move", icon: "\uF105", percentage: ran * 60 + 30 },
      ];
    };
    let colors = ["#e90b3a", "#a0ff03", "#1ad5de"];
    let width = 500,
      height = 500,
      τ = 2 * Math.PI;

    function build(dataset: any, singleArcView?: any) {
      let arc = d3 // @ts-ignore

        .arc()
        .startAngle(0)
        .endAngle(function (d: any) {
          return (d.percentage / 100) * τ;
        })
        .innerRadius(function (d: any) {
          return 140 - d.index * (40 + gap);
        })
        .outerRadius(function (d: any) {
          return 180 - d.index * (40 + gap);
        })
        .cornerRadius(20); //modified d3 api only

      let background = d3
        // @ts-ignore
        .arc()
        .startAngle(0)
        .endAngle(τ)
        .innerRadius(function (d: any, i: any) {
          return 140 - d.index * (40 + gap);
        })
        .outerRadius(function (d: any, i: any) {
          return 180 - d.index * (40 + gap);
        });

      let svg = d3
        .select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      //add linear gradient, notice apple uses gradient alone the arc..
      //meh, close enough...

      let gradient = svg
        .append("svg:defs")
        .append("svg:linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "100%")
        .attr("x2", "50%")
        .attr("y2", "0%")
        .attr("spreadMethod", "pad");

      gradient
        .append("svg:stop")
        .attr("offset", "0%")
        .attr("stop-color", "#fe08b5")
        .attr("stop-opacity", 1);

      gradient
        .append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", "#ff1410")
        .attr("stop-opacity", 1);

      //add some shadows
      let defs = svg.append("defs");

      let filter = defs.append("filter").attr("id", "dropshadow");

      filter
        .append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 4)
        .attr("result", "blur");
      filter
        .append("feOffset")
        .attr("in", "blur")
        .attr("dx", 1)
        .attr("dy", 1)
        .attr("result", "offsetBlur");

      let feMerge = filter.append("feMerge");

      feMerge.append("feMergeNode").attr("in", "offsetBlur");
      feMerge.append("feMergeNode").attr("in", "SourceGraphic");

      let field = svg.selectAll("g").data(dataset).enter().append("g");

      field
        .append("path")
        .attr("class", "progress")
        .attr("filter", "url(#dropshadow)");

      field
        .append("path")
        .attr("class", "bg")
        .style("fill", function (d: any) {
          return colors[d.index];
        })
        .style("opacity", 0.2) // @ts-ignore
        .attr("d", background);

      field.append("text").attr("class", "icon");

      if (singleArcView) {
        field
          .append("text")
          .attr("class", "goal")
          .text("OF 600 CALS")
          .attr("transform", "translate(0,50)");
        field
          .append("text")
          .attr("class", "completed")
          .attr("transform", "translate(0,0)");
      }

      d3.transition().duration(1750).each(update);

      function update() {
        field = field
          .each(function (d: any) {
            // @ts-ignore

            this._value = d.percentage;
          })
          .data(dataset)
          .each(function (d: any) {
            // @ts-ignore

            d.previousValue = this._value;
          });

        field
          .select("path.progress")
          .transition()
          .duration(1750)
          .delay(function (d, i) {
            return i * 200;
          })
          // @ts-ignore
          .ease("elastic") // @ts-ignore
          .attrTween("d", arcTween)
          .style("fill", function (d: any) {
            if (d.index === 0) {
              return "url(#gradient)";
            }
            return colors[d.index];
          });

        field
          .select("text.icon")
          .text(function (d: any) {
            return d.icon;
          })
          .attr("transform", function (d: any) {
            return "translate(10," + -(150 - d.index * (40 + gap)) + ")";
          });

        field.select("text.completed").text(function (d: any) {
          return Math.round((d.percentage / 100) * 600);
        });

        setTimeout(update, 2000);
      }

      function arcTween(d: any) {
        let i = d3.interpolateNumber(d.previousValue, d.percentage);
        return function (t: any) {
          d.percentage = i(t);
          return arc(d);
        };
      }
    }

    build(ranDataset);
    build(ranDataset2, true);
  });

  return (
    <ErrorBoundary>
      <div>RadialChart</div>
    </ErrorBoundary>
  );
};

export default RadialChart;
