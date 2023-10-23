let locations = ["han","hbf","wb","see","lnz"]


function fetchData(location) {
    return new Promise((resolve, reject) => {
      fetch('/api/getLoad/'+location)
        .then(response => {
          if (!response.ok) {
            reject('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }


const chartsContainer = document.getElementById("charts");



locations.forEach(location => {
    fetchData(location)
      .then(apiData => {
        const load = apiData.load;
        console.log(load)

        const chartheader = document.createElement("h2");
        chartheader.id = "header"+location;
        chartheader.style.cssText = "text-align:center";
        chartheader.innerHTML = apiData.name;
        chartsContainer.appendChild(chartheader);

      
        const chartContainer = document.createElement("div");
        chartContainer.id = location;
        chartContainer.style.cssText = "max-width: 740px; height: 330px; margin: 0px auto;";
    
        chartsContainer.appendChild(chartContainer);
        const chartConfig = {
            theme: "dark",
            debug: false,
            legend_visible: false,
            defaultTooltip_enabled: false,
            xAxis_spacingPercentage: 0.4,
            yAxis: [
                {
                    id: 'ax1',
                    defaultTick: {
                        padding: 10,
                        enabled: false
                    },
                    customTicks: [0, 25, 50, 75, 100],
                    line: {
                        width: 10,
                        breaks: {},
                        color: 'smartPalette:pal1'
                    },
                    scale_range: [0, 100]
                }
            ],
            defaultSeries: {
                type: 'gauge column roundcaps',
                shape: {
                    label: {
                        text: '%max%',
                        align: 'center',
                        verticalAlign: 'middle',
                        style_fontSize: 28,
                    text: '<span color="%color">{%sum}%</span><br/><span color="#696969" fontSize="16px">Auslastung</span>',
                    }
                }
            },
            series: [
                {
                    type: 'column roundcaps',
                    name: 'Visitors',
                    yAxis: 'ax1',
                    palette: {
                        id: 'pal1',
                        pointValue: '%yValue',
                        ranges: [
                            { value: 0, color: '#21D683' },
                            { value: 25, color: '#77E6B4' },
                            { value: 75, color: '#FFD221' },
                            { value: [75, 100], color: '#FF5353' }
                        ]
                    },
                    points: [['x', [0, load]]]
                }
            ]
        };
    
        JSC.chart(location, chartConfig);
    })
});