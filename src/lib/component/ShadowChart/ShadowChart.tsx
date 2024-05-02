import React, { useEffect, useRef } from "react";
import "./ShadowChart.scss";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import highChartsTilemap from "highcharts/modules/tilemap";
import highChartsHeatmap from "highcharts/modules/heatmap";
import { ShadowChartMetaData } from "../../models";
highchartsMore(Highcharts);
highChartsHeatmap(Highcharts);
highChartsTilemap(Highcharts);

interface ShadowChartProps {
  shadowChartMetaData?: ShadowChartMetaData;
  chartWidth?: string;
  chartHeight?: string;
  displayGridLines?: boolean;
  onUpdateChart?: (arg: any) => void;
}

const ShadowChart = ({
  shadowChartMetaData = { updateFlag: false },
  chartWidth = "",
  chartHeight = "",
  displayGridLines = false,
  onUpdateChart,
}: ShadowChartProps) => {
  const chartElement: any = useRef();
  let chart = null;

  const renderChart = () => {
    // addDefaultOptions();

    if (shadowChartMetaData.chart) {
      shadowChartMetaData.chart.styledMode = true;
      shadowChartMetaData.chart.renderTo = chartElement.current;

      chart = Highcharts.chart({
        ...shadowChartMetaData,
        accessibility: { enabled: false },
      });
    }
  };

  const addDefaultOptions = () => {
    Highcharts.setOptions({
      lang: {
        numericSymbols: ["K", " M", "B", "T"],
      },
    });

    if (!shadowChartMetaData.legend) {
      shadowChartMetaData.legend = {
        align: "left",
        verticalAlign: "bottom",
        layout: "horizontal",
      };
    }

    if (displayGridLines) {
      if (shadowChartMetaData.xAxis) {
        shadowChartMetaData.xAxis.gridLineWidth = 1;
      } else {
        shadowChartMetaData.xAxis = { gridLineWidth: 1 };
      }
    }
  };

  useEffect(() => {
    if (chartElement && chartElement.current) {
      if (chartWidth) {
        chartElement.current.style.width = chartWidth;
      }
      if (chartHeight) {
        chartElement.current.style.height = chartHeight;
      }
      chartElement.current.style.maxHeight = '600px';
      chartElement.current.style.maxWidth = "600px";
      
      renderChart();
    }
  }, [shadowChartMetaData, chartWidth, chartHeight]);

  return (
    <div className="shadow-chart-container">
      <div ref={chartElement}></div>
    </div>
  );
};

export default ShadowChart;
