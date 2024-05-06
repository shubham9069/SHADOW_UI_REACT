import React from 'react';
import { ColumnMetadata, ShadowClickEventOutput, ShadowTableSelectType, TableState } from '../../models';
import './ShadowTable.scss';
interface ShadowTableProps {
    editMode?: string;
    columnDefs: ColumnMetadata[] | any[];
    tableData: any[];
    emptyMessage?: string;
    showTableCaption?: boolean;
    tableCaption?: string;
    pagination?: boolean;
    serverSidePagination?: boolean;
    totalRecords?: number;
    rowsPerPage?: number;
    showFirstLastIcon?: boolean;
    showGlobalFilter?: boolean;
    tableSizeClass?: string;
    responseLayout?: 'scroll' | 'stack' | undefined;
    responsiveLayoutBreakPoint?: string;
    sortMode?: 'multiple' | 'single' | undefined;
    emptyMeesageColSpan?: number;
    showCurrentPageReport?: boolean;
    rowsPerPageOptions?: number[];
    currentPageReportTemplate?: string;
    loading?: boolean;
    first?: number;
    orderBy?: Record<string, string>;
    scrollable?: boolean;
    scrollHeight?: string;
    virtualScroll?: boolean;
    pageLinks?: number;
    showStripedRows?: boolean;
    showGridLines?: boolean;
    hideBorder?: boolean;
    selectionMode?: any;
    enableSelection?: boolean;
    selectedRows?: any;
    selectionType?: ShadowTableSelectType;
    showAllSelectCheckbox?: boolean;
    template?: any;
    onPagination?: (tableState: TableState) => void;
    onRowClick?: (event: ShadowClickEventOutput) => void;
    onRowUnClick?: (event: ShadowClickEventOutput) => void;
    selectAllHandler?: (columns: ColumnMetadata[]) => void;
    onChangeEditInputHandler?: (event: ShadowClickEventOutput) => void;
    onCellEditCompleteHandler?: (event: ShadowClickEventOutput) => void;
}
declare const ShadowTable: ({ editMode, columnDefs, tableData, emptyMessage, showTableCaption, tableCaption, pagination, serverSidePagination, totalRecords, rowsPerPage, showFirstLastIcon, showGlobalFilter, tableSizeClass, responseLayout, responsiveLayoutBreakPoint, sortMode, emptyMeesageColSpan: propEmptyMeesageColSpan, showCurrentPageReport, rowsPerPageOptions, currentPageReportTemplate, loading, first, scrollable, scrollHeight, virtualScroll, pageLinks, showStripedRows, showGridLines, hideBorder, selectionMode, enableSelection, selectedRows, selectionType, showAllSelectCheckbox, orderBy, template, onPagination, onRowClick, onRowUnClick, selectAllHandler, onChangeEditInputHandler, onCellEditCompleteHandler }: ShadowTableProps) => React.JSX.Element;
export default ShadowTable;