import { Component } from '@angular/core';
declare var Highcharts: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  ngOnInit(): void {
    this.renderPieChart();
    this.renderAreaAmountChart();
    this.renderOnboarding();
    this.renderSatckedBarChart();
  }
  renderPieChart() {
    Highcharts.chart("pieContainer", {
      chart: {
        backgroundColor: "#FFFFFF00",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie"
      },
      exporting: false,
      credits: {
        enabled: false
      },
      title: {
        text: ""
      },
      tooltip: {
        backgroundColor: "#ffffff",
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.y}",
            style: {
              color: "#001E2780",
              fontFamily: "'Source Sans Pro', sans-serif",
              fontSize: "12"
            }
          }
        }
      },
      series: [
        {
          name: "Overdue Loans",
          colors: [
            "#E84F384d",
            "#E84F3866",
            "#E84F3880",
            "#E84F3899",
            "#E84F38cc",
            "#E84F38ff"
          ],
          data: [
            {
              name: "0-60",
              y: 61,
              sliced: false,
              selected: true
            },
            {
              name: "61-90",
              y: 11
            },
            {
              name: "91-120",
              y: 10
            },
            {
              name: "121-180",
              y: 4
            },
            {
              name: "181-365",
              y: 4
            },
            {
              name: ">365",
              y: 1
            }
          ]
        }
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                enabled: false
              }
            }
          }
        ]
      }
    });
  }
  renderAreaAmountChart() {
    Highcharts.chart("loansChart", {
      chart: {
        backgroundColor: "#FFFFFF00",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        style: {
          color: "#001E2780",
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: "12"
        }
      },
      exporting: false,
      credits: {
        enabled: false
      },
      title: {
        text: ""
      },
      xAxis: {
        type: "datetime",
        dateTimeLabelFormats: {
          // don't display the dummy year
          month: "%b",
          year: "%b"
        }
      },
      yAxis: {
        title: {
          text: "Amount in Crores"
        },
        min: 0,
        gridLineWidth: 0
      },
      tooltip: {
        backgroundColor: "#ffffff",
        formatter: function() {
          return Highcharts.dateFormat("%b", this.x) + ": " + this.y + " Loans";
        }
      },
      plotOptions: {
        area: {
          color: "#32D19C",
          marker: {
            enabled: true,
            states: {
              hover: {
                enabled: true,
                radius: 5
              }
            }
          },
          shadow: false,
          states: {
            hover: {
              lineWidth: 1
            }
          }
        }
      },
      series: [
        {
          name: "Time",
          showInLegend: false,
          type: "area",
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, "#32D19CFF"],
              [1, "#32D19C00"]
            ]
          },
          // Define the data points. All series have a dummy year
          // of 1970/71 in order to be compared on the same x axis. Note
          // that in JavaScript, months start at 0 for January, 1 for February etc.
          data: [
            [Date.UTC(2017, 10), 25],
            [Date.UTC(2017, 11), 12],
            [Date.UTC(2017, 12), 15],
            [Date.UTC(2018, 1), 28],
            [Date.UTC(2018, 2), 25],
            [Date.UTC(2018, 3), 35]
          ]
        }
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                enabled: false
              }
            }
          }
        ]
      }
    });
  }
  renderOnboarding() {
    Highcharts.chart("onboarding", {
      chart: {
        backgroundColor: "#FFFFFF00",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        style: {
          color: "#001E2780",
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: "12"
        }
      },
      exporting: false,
      credits: {
        enabled: false
      },
      title: {
        text: ""
      },
      xAxis: {
        type: "datetime",
        dateTimeLabelFormats: {
          // don't display the dummy year
          month: "%b",
          year: "%b"
        }
      },
      yAxis: {
        title: {
          text: "Count"
        },
        min: 0,
        gridLineWidth: 0
      },
      tooltip: {
        backgroundColor: "#ffffff",
        formatter: function() {
          return (
            Highcharts.dateFormat("%b", this.x) + ": " + this.y + " Customers"
          );
        }
      },
      plotOptions: {
        area: {
          color: "#A733D1",
          marker: {
            enabled: true,
            states: {
              hover: {
                enabled: true,
                radius: 5
              }
            }
          },
          shadow: false,
          states: {
            hover: {
              lineWidth: 1
            }
          }
        }
      },
      series: [
        {
          name: "Time",
          showInLegend: false,
          type: "area",
          fillColor: {
            linearGradient: [0, 0, 0, 300],
            stops: [
              [0, "#A733D1FF"],
              [1, "#A733D100"]
            ]
          },
          // Define the data points. All series have a dummy year
          // of 1970/71 in order to be compared on the same x axis. Note
          // that in JavaScript, months start at 0 for January, 1 for February etc.
          data: [
            [Date.UTC(2017, 10), 25],
            [Date.UTC(2017, 11), 12],
            [Date.UTC(2017, 12), 15],
            [Date.UTC(2018, 1), 28],
            [Date.UTC(2018, 2), 25],
            [Date.UTC(2018, 3), 35]
          ]
        }
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                enabled: false
              }
            }
          }
        ]
      }
    });
  }
  renderSatckedBarChart() {
    Highcharts.chart("loansBarChart", {
      chart: {
        backgroundColor: "#FFFFFF00",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        style: {
          color: "#001E2780",
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: "12"
        },
        type: "column"
      },
      exporting: false,
      credits: {
        enabled: false
      },
      title: {
        text: ""
      },
      xAxis: {
        categories: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]
      },
      yAxis: {
        min: 0,
        title: {
          text: "Count"
        },
        stackLabels: {
          enabled: true
        },
        gridLineWidth: 0
      },
      legend: {
        align: "center",
        verticalAlign: "top",
        floating: true,
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.background2) || "white",
        shadow: false
      },
      tooltip: {
        headerFormat: "<b>{point.x}</b><br/>",
        pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
      },
      plotOptions: {
        column: {
          stacking: "normal",
          dataLabels: {
            enabled: false,
            color:
              (Highcharts.theme && Highcharts.theme.dataLabelsColor) || "white"
          }
        }
      },
      series: [
        {
          name: "Auto",
          data: [6, 8, 25, 12, 9, 17],
          color: "#F78BCF"
        },
        {
          name: "CD",
          data: [12, 14, 12, 7, 4, 3],
          color: "#CD64ED"
        },
        {
          name: "Gold",
          data: [5, 2, 4, 1, 2, 10],
          color: "#948FFF"
        },
        {
          name: "JLG",
          data: [0, 6, 12, 32, 24, 15],
          color: "#FFA03B"
        },
        {
          name: "Personal",
          data: [12, 20, 12, 6, 21, 15],
          color: "#64D9D3"
        }
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                align: "right",
                layout: "horizontal"
              }
            }
          }
        ]
      }
    });
  }
}
