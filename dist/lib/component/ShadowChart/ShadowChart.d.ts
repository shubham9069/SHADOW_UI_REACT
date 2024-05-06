import React from 'react';
import './ShadowChart.scss';
import { ShadowChartMetaData } from '../../models';
interface ShadowChartProps {
    shadowChartMetaData?: ShadowChartMetaData;
    chartWidth?: string;
    chartHeight?: string;
    displayGridLines?: boolean;
    onUpdateChart?: (arg: any) => void;
}
declare const ShadowChart: ({ shadowChartMetaData, chartWidth, chartHeight, displayGridLines, onUpdateChart }: ShadowChartProps) => React.JSX.Element;
export default ShadowChart;
