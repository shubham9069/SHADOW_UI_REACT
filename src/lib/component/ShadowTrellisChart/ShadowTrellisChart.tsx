import React, { useEffect, useRef } from 'react'
import './ShadowTrellisChart.scss'
import Highcharts from 'highcharts'
import { TrellisChartData, TrellisChartMetaData } from '../../models'

interface ShadowTrellisChartProps {
  chartMetaData: TrellisChartMetaData
  chartWidth?: string
  chartHeight?: string
}

const ShadowTrellisChart = ({
  chartMetaData = { chartData: [] },
  chartWidth = '94%',
  chartHeight = '400px'
}: ShadowTrellisChartProps) => {
  const chartContainerSales: any = useRef()
  const chartContainerUnits: any = useRef()

  const buildChart = () => {
    if (chartMetaData?.chartData?.length) {
      chartMetaData.chartData.forEach(
        (dataset: TrellisChartData, i: number) => {
          Highcharts.chart(
            i === 0 ? chartContainerSales.current : chartContainerUnits.current,
            {
              chart: {
                type: 'bar'
              },
              accessibility: { enabled: false },
              plotOptions: {
                bar: {
                  dataLabels: {
                    enabled: chartMetaData.showDataLabels
                  }
                }
              },
              title: {
                text: dataset.name,
                align: 'center',
                x: i === 0 ? 90 : 0,
                style: {
                  fontWeight: '600',
                  fontSize: '14px',
                  fontFamily: 'Inter',
                  color: '#656C78'
                }
              },
              credits: {
                enabled: false
              },

              xAxis: {
                categories: chartMetaData.yAxisLabels,
                lineWidth: 0,
                labels: {
                  enabled: i === 0
                },
                title: {
                  text: i === 0 ? chartMetaData.yAxisTitle : null,
                  style: {
                    fontSize: '14px',
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    color: '#656C78'
                  }
                }
              },

              yAxis: {
                categories: chartMetaData.xAxisLabels,
                labels: {
                  format: `{value} ${chartMetaData.suffix ?? ''}`
                },
                allowDecimals: true,
                title: {
                  text: '',
                  style: {
                    fontSize: '14px',
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    color: '#656C78'
                  }
                },
                gridLineWidth: chartMetaData.showGridLines ? 1 : 0,
                plotLines: [
                  {
                    value: 0,
                    width: 1,
                    color: '#656C78',
                    zIndex: 10
                  }
                ]
              },

              legend: {
                enabled: false
              },
              series: [
                {
                  name: dataset.name,
                  type: 'bar',
                  color: '#92c92b',
                  negativeColor: '#e47969',
                  data: dataset.series,
                  tooltip: {
                    valueSuffix: chartMetaData.suffix ?? ''
                  },
                  dataLabels: {
                    style: {
                      fontSize: '14px',
                      fontFamily: 'Inter',
                      fontWeight: 'normal',
                      color: '#25282E'
                    }
                  }
                }
              ]
            }
          )
        }
      )
    }
  }

  useEffect(() => {
    if (chartMetaData.chartData?.length > 0) {
      if (chartContainerSales.current) {
        chartContainerSales.current.style.width = chartWidth
        chartContainerSales.current.style.height = chartHeight
      }

      if (chartContainerUnits.current) {
        chartContainerUnits.current.style.width = chartWidth
        chartContainerUnits.current.style.height = chartHeight
      }

      buildChart()
    }
  }, [chartMetaData, chartWidth, chartHeight])

  return (
    <div
      className={`shadow-trellis-chart-container ${
        chartMetaData.chartData.length > 1 ? 'shadow-trellis-chart-columns' : ''
      }`}
    >
      <div
        ref={chartContainerSales}
        id={`chartContainer${Math.random()}`}
      ></div>
      {chartMetaData.chartData.length > 1 ? (
        <div
          ref={chartContainerUnits}
          id={`chartContainer${Math.random()}`}
        ></div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default ShadowTrellisChart
