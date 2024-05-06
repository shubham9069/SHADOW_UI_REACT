import React from 'react';
import './ShadowTrellisChart.scss';
import { TrellisChartMetaData } from '../../models';
interface ShadowTrellisChartProps {
    chartMetaData: TrellisChartMetaData;
    chartWidth?: string;
    chartHeight?: string;
}
declare const ShadowTrellisChart: ({ chartMetaData, chartWidth, chartHeight }: ShadowTrellisChartProps) => React.JSX.Element;
export default ShadowTrellisChart;
