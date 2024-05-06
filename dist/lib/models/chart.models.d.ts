export interface ShadowChartMetaData {
    updateFlag: boolean;
    chart?: Highcharts.ChartOptions;
    credits?: Highcharts.CreditsOptions;
    plotOptions?: Highcharts.PlotOptions;
    title?: Highcharts.TitleOptions;
    subtitle?: Highcharts.SubtitleOptions;
    chartWidth?: string;
    chartHeight?: string;
    xAxis?: Highcharts.XAxisOptions;
    yAxis?: Highcharts.YAxisOptions;
    tooltip?: Highcharts.TooltipOptions;
    series?: any;
    legend?: Highcharts.LegendOptions;
}
export interface TrellisChartMetaData {
    chartData: TrellisChartData[];
    yAxisLabels?: string[];
    xAxisLabels?: string[];
    yAxisTitle?: string;
    xAxisTitle?: string;
    suffix?: string;
    showGridLines?: boolean;
    showDataLabels?: boolean;
}
export interface TrellisChartData {
    name?: string;
    series?: any;
}
