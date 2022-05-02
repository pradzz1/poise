import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";

HighchartsHeatmap(Highcharts);

const data = [
  { region: 'Asia', val: 4119626293 },
  { region: 'Africa', val: 1012956064 },
  { region: 'Northern America', val: 344124520 },
  { region: 'Latin America and the Caribbean', val: 590946440 },
  { region: 'Europe', val: 727082222 },
  { region: 'Oceania', val: 35104756 },
];

function Charts({lable}){
  let state = {
    options: {
      chart: {
        type: "heatmap",
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
      },

      title: {
        text: ""
      },

      xAxis: {
        categories: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },

      yAxis: {
        categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        title: null,
        reversed: true
      },

      colorAxis: {
        min: 0,
        minColor: "#FFFFFF",
        maxColor: Highcharts.getOptions().colors[0]
      },

      legend: {
        align: "right",
        layout: "vertical",
        margin: 0,
        verticalAlign: "top",
        y: 25,
        symbolHeight: 280
      },

      series: [
        {
          name: "",
          borderWidth: 1,
          data: [
            [0, 0, 10],
            [0, 1, 19],
            [0, 2, 8],
            [0, 3, 24],
            [0, 4, 67],
            [1, 0, 92],
            [1, 1, 58],
            [1, 2, 78],
            [1, 3, 117],
            [1, 4, 48],
            [2, 0, 35],
            [2, 1, 15],
            [2, 2, 123],
            [2, 3, 64],
            [2, 4, 52],
            [3, 0, 72],
            [3, 1, 132],
            [3, 2, 114],
            [3, 3, 19],
            [3, 4, 16],
            [4, 0, 38],
            [4, 1, 5],
            [4, 2, 8],
            [4, 3, 117],
            [4, 4, 115],
            [5, 0, 88],
            [5, 1, 32],
            [5, 2, 12],
            [5, 3, 6],
            [5, 4, 120],
            [6, 0, 13],
            [6, 1, 44],
            [6, 2, 88],
            [6, 3, 98],
            [6, 4, 96],
            [7, 0, 31],
            [7, 1, 1],
            [7, 2, 82],
            [7, 3, 32],
            [7, 4, 30],
            [8, 0, 85],
            [8, 1, 97],
            [8, 2, 123],
            [8, 3, 64],
            [8, 4, 84],
            [9, 0, 47],
            [9, 1, 114],
            [9, 2, 31],
            [9, 3, 48],
            [9, 4, 91]
          ],
          dataLabels: {
            enabled: true,
            color: "#000000"
          }
        }
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              yAxis: {
                labels: {
                  formatter: function () {
                    return this.value.charAt(0);
                  }
                }
              }
            }
          }
        ]
      }
    }
  };
    return   <HighchartsReact highcharts={Highcharts} options={state.options} />
}

export default Charts;

 
  