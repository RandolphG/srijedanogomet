import React, { useEffect } from "react";
// @ts-ignore
import Snap from "snapsvg";
import * as $ from "jquery";

const AnimatedStatsandGraphs = () => {
  useEffect(() => {
    let chart_h = 40;
    let chart_w = 80;
    let stepX = 77 / 14;

    let chart_1_y = [15, 25, 40, 30, 45, 40, 35, 55, 37, 50, 60, 45, 70, 78];
    let chart_2_y = [80, 65, 65, 40, 55, 34, 54, 50, 60, 64, 55, 27, 24, 30];

    function point(x: number, y: number) {
      x: 0;
      y: 0;
    }

    /* DRAW GRID */
    function drawGrid(graph: any) {
      let localGraph: any = Snap(graph);
      let g = localGraph.g();
      g.attr("id", "grid");

      for (let i = 0; i <= stepX + 2; i++) {
        let horizontalLine = graph.path(
          "M" + 0 + "," + stepX * i + " " + "L" + 77 + "," + stepX * i
        );
        horizontalLine.attr("class", "horizontal");
        g.add(horizontalLine);
      }

      for (let i = 0; i <= 14; i++) {
        let horizontalLine = graph.path(
          "M" + stepX * i + "," + 38.7 + " " + "L" + stepX * i + "," + 0
        );
        horizontalLine.attr("class", "vertical");
        g.add(horizontalLine);
      }
    }

    drawGrid("#chart-2");
    drawGrid("#chart-1");

    function drawLineGraph(graph: any, points: any, container: any, id: any) {
      let localGraph: any = Snap(graph);

      /*END DRAW GRID*/

      /* PARSE POINTS */
      let myPoints: any[] = [];
      let shadowPoints = [];

      function parseData(points: any) {
        for (let i = 0; i < points.length; i++) {
          let p = new point();
          let pv = (points[i] / 100) * 40;
          p.x = (83.7 / points.length) * i + 1;
          p.y = 40 - pv;
          if (p.x > 78) {
            p.x = 78;
          }
          myPoints.push(p);
        }
      }

      let segments: any[] = [];

      function createSegments(p_array: any) {
        for (let i = 0; i < p_array.length; i++) {
          let seg = "L" + p_array[i].x + "," + p_array[i].y;
          if (i === 0) {
            seg = "M" + p_array[i].x + "," + p_array[i].y;
          }
          segments.push(seg);
        }
      }

      function joinLine(segments_array: any, id: any) {
        let line: any = segments_array.join(" ");
        let line: any = graph.path(line);
        line.attr("id", "graph-" + id);
        let lineLength = line.getTotalLength();

        line.attr({
          "stroke-dasharray": lineLength,
          "stroke-dashoffset": lineLength,
        });
      }

      function calculatePercentage(points: any, graph: any) {
        let initValue = points[0];
        let endValue = points[points.length - 1];
        let sum = endValue - initValue;
        let prefix;
        let percentageGain;
        let stepCount = 1300 / sum;

        function findPrefix() {
          if (sum > 0) {
            prefix = "+";
          } else {
            prefix = "";
          }
        }

        let percentagePrefix = "";

        function percentageChange() {
          percentageGain = (initValue / endValue) * 100;

          if (percentageGain > 100) {
            console.log("over100");
            percentageGain = Math.round(percentageGain * 100 * 10) / 100;
          } else if (percentageGain < 100) {
            console.log("under100");
            percentageGain = Math.round(percentageGain * 10) / 10;
          }
          if (initValue > endValue) {
            percentageGain = (endValue / initValue) * 100 - 100;
            percentageGain = percentageGain.toFixed(2);

            percentagePrefix = "";
            $(graph).find(".percentage-value").addClass("negative");
          } else {
            percentagePrefix = "+";
          }
          if (endValue > initValue) {
            percentageGain = (endValue / initValue) * 100;
            percentageGain = Math.round(percentageGain);
          }
        }
        percentageChange();
        findPrefix();

        let percentage = $(graph).find(".percentage-value");
        let totalGain = $(graph).find(".total-gain");
        let hVal = $(graph).find(".h-value");

        function count(graph: any, sum: any) {
          let totalGain = $(graph).find(".total-gain");
          let i = 0;
          let time = 1300;
          let intervalTime = Math.abs(time / sum);
          let timerID = 0;
          if (sum > 0) {
            let timerID = setInterval(function () {
              i++;
              totalGain.text(percentagePrefix + i);
              if (i === sum) clearInterval(timerID);
            }, intervalTime);
          } else if (sum < 0) {
            let timerID = setInterval(function () {
              i--;
              totalGain.text(percentagePrefix + i);
              if (i === sum) clearInterval(timerID);
            }, intervalTime);
          }
        }
        count(graph, sum);

        percentage.text(percentagePrefix + percentageGain + "%");
        totalGain.text("0%");
        setTimeout(function () {
          percentage.addClass("visible");
          hVal.addClass("visible");
        }, 1300);
      }

      function showValues() {
        let val1 = $(graph).find(".h-value");
        let val2 = $(graph).find(".percentage-value");
        val1.addClass("visible");
        val2.addClass("visible");
      }

      function drawPolygon(segments: any, id: any) {
        let lastel = segments[segments.length - 1];
        let polySeg = segments.slice();
        polySeg.push([78, 38.4], [1, 38.4]);
        let polyLine = polySeg.join(" ").toString();
        let replacedString = polyLine.replace(/L/g, "").replace(/M/g, "");

        let poly = graph.polygon(replacedString);
        let clip = graph.rect(-80, 0, 80, 40);
        poly.attr({
          id: "poly-" + id,
          /*'clipPath':'url(#clip)'*/
          clipPath: clip,
        });
        clip.animate(
          {
            transform: "t80,0",
          },
          1300,
          mina.linear
        );
      }

      parseData(points);

      createSegments(myPoints);
      calculatePercentage(points, container);
      joinLine(segments, id);

      drawPolygon(segments, id);

      /*$('#poly-'+id).attr('class','show');*/

      /* function drawPolygon(segments,id){
        let polySeg = segments;
        polySeg.push([80,40],[0,40]);
        let polyLine = segments.join(' ').toString();
        let replacedString = polyLine.replace(/L/g,'').replace(/M/g,"");
        let poly = graph.polygon(replacedString);
        poly.attr('id','poly-'+id)
      }
      drawPolygon(segments,id);*/
    }
    function drawCircle(container: any, id: any, progress: any, parent: any) {
      let paper = Snap(container);
      let prog = paper.path("M5,50 A45,45,0 1 1 95,50 A45,45,0 1 1 5,50");
      let lineL = prog.getTotalLength();
      let oneUnit = lineL / 100;
      let toOffset = lineL - oneUnit * progress;
      let myID = "circle-graph-" + id;
      prog.attr({
        "stroke-dashoffset": lineL,
        "stroke-dasharray": lineL,
        id: myID,
      });

      let animTime = 1300; /*progress / 100*/

      prog.animate(
        {
          "stroke-dashoffset": toOffset,
        },
        animTime,
        mina.easein
      );

      function countCircle(animtime: any, parent: any, progress: any) {
        let textContainer = $(parent).find(".circle-percentage");
        let i = 0;
        let time = 1300;
        let intervalTime = Math.abs(time / progress);
        let timerID = setInterval(function () {
          i++;
          textContainer.text(i + "%");
          if (i === progress) clearInterval(timerID);
        }, intervalTime);
      }
      countCircle(animTime, parent, progress);
    }

    $(window).on("load", function () {
      drawCircle("#chart-3", 1, 77, "#circle-1");
      drawCircle("#chart-4", 2, 53, "#circle-2");
      drawLineGraph("#chart-1", chart_1_y, "#graph-1-container", 1);
      drawLineGraph("#chart-2", chart_2_y, "#graph-2-container", 2);
    });
  });

  return (
    <div>
      <h1>
        Stats animation remake of Virgil Pana dribbble shot
        <br />
      </h1>

      <div className="charts-container cf">
        <div className="chart" id="graph-1-container">
          <h2 className="title">Hours worked</h2>
          <div className="chart-svg">
            <svg className="chart-line" id="chart-1" viewBox="0 0 80 40">
              <defs>
                <clipPath id="clip" x="0" y="0" width="80" height="40">
                  <rect id="clip-rect" x="-80" y="0" width="77" height="38.7" />
                </clipPath>

                <linearGradient id="gradient-1">
                  <stop offset="0" stopColor="#00d5bd" />
                  <stop offset="100" stopColor="#24c1ed" />
                </linearGradient>

                <linearGradient id="gradient-2">
                  <stop offset="0" stopColor="#954ce9" />
                  <stop offset="0.3" stopColor="#954ce9" />
                  <stop offset="0.6" stopColor="#24c1ed" />
                  <stop offset="1" stopColor="#24c1ed" />
                </linearGradient>

                <linearGradient
                  id="gradient-3"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0"
                    stopColor="rgba(0, 213, 189, 1)"
                    stopOpacity="0.07"
                  />
                  <stop
                    offset="0.5"
                    stopColor="rgba(0, 213, 189, 1)"
                    stopOpacity="0.13"
                  />
                  <stop
                    offset="1"
                    stopColor="rgba(0, 213, 189, 1)"
                    stopOpacity="0"
                  />
                </linearGradient>

                <linearGradient
                  id="gradient-4"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0"
                    stopColor="rgba(149, 76, 233, 1)"
                    stopOpacity="0.07"
                  />
                  <stop
                    offset="0.5"
                    stopColor="rgba(149, 76, 233, 1)"
                    stopOpacity="0.13"
                  />
                  <stop
                    offset="1"
                    stopColor="rgba(149, 76, 233, 1)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
            <h3 className="valueX">time</h3>
          </div>
          <div className="chart-values">
            <p className="h-value">1689h</p>
            <p className="percentage-value" />
            <p className="total-gain" />
          </div>
          <div className="triangle green" />
        </div>
        <div className="chart" id="graph-2-container">
          <h2 className="title">Hours worked</h2>
          <div className="chart-svg">
            <svg className="chart-line" id="chart-2" viewBox="0 0 80 40" />
            <h3 className="valueX">time</h3>
          </div>
          <div className="chart-values">
            <p className="h-value">322h</p>
            <p className="percentage-value" />
            <p className="total-gain" />
          </div>
          <div className="triangle red" />
        </div>
        <div className="chart circle" id="circle-1">
          <h2 className="title">IBApps Website</h2>
          <div className="chart-svg align-center">
            <h2 className="circle-percentage" />
            <svg
              className="chart-circle"
              id="chart-3"
              width="50%"
              viewBox="0 0 100 100"
            >
              <path
                className="underlay"
                d="M5,50 A45,45,0 1 1 95,50 A45,45,0 1 1 5,50"
              />
            </svg>
          </div>
          <div className="triangle green" />
        </div>
        <div className="chart circle" id="circle-2">
          <h2 className="title">IBApps Website</h2>
          <div className="chart-svg align-center">
            <h2 className="circle-percentage" />
            <svg
              className="chart-circle"
              id="chart-4"
              width="50%"
              viewBox="0 0 100 100"
            >
              <path
                className="underlay"
                d="M5,50 A45,45,0 1 1 95,50 A45,45,0 1 1 5,50"
              />
            </svg>
          </div>
          <div className="triangle red" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatsandGraphs;
