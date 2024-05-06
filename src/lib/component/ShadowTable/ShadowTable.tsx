import React, { Fragment, useState, useEffect, useRef } from 'react'
import {
  ColumnMetadata,
  ShadowClickEventOutput,
  ShadowTableSelectType,
  ShadowTableSelectionMode,
  TableState
} from '../../models'
import './ShadowTable.scss'
import {
  DataTable,
  DataTableFilterMeta,
  DataTableSortMeta
} from 'primereact/datatable'
import { Column, ColumnEditorOptions, ColumnEvent } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { FilterMatchMode } from 'primereact/api'
import ShadowDropdown from '../ShadowDropdown/ShadowDropdown'
import { Nullable } from 'primereact/ts-helpers'
import { InputNumber } from 'primereact/inputnumber'

interface LazyTableState {
  first: number
  last: number
  rows: number
  page: number
  multiSortStateMeta?: DataTableSortMeta[]
  sortField?: string | null
  sortOrder?: number | null
  filters: DataTableFilterMeta
}

interface ShadowTableProps {
  editMode?: string
  columnDefs: ColumnMetadata[] | any[]
  tableData: any[]
  emptyMessage?: string
  showTableCaption?: boolean
  tableCaption?: string
  pagination?: boolean
  serverSidePagination?: boolean
  totalRecords?: number
  rowsPerPage?: number
  showFirstLastIcon?: boolean
  showGlobalFilter?: boolean
  tableSizeClass?: string
  responseLayout?: 'scroll' | 'stack' | undefined
  responsiveLayoutBreakPoint?: string
  sortMode?: 'multiple' | 'single' | undefined
  emptyMeesageColSpan?: number
  showCurrentPageReport?: boolean
  rowsPerPageOptions?: number[]
  currentPageReportTemplate?: string
  loading?: boolean
  first?: number
  orderBy?: Record<string, string>
  scrollable?: boolean
  scrollHeight?: string
  virtualScroll?: boolean
  pageLinks?: number
  showStripedRows?: boolean
  showGridLines?: boolean
  hideBorder?: boolean
  selectionMode?: any
  enableSelection?: boolean
  selectedRows?: any
  selectionType?: ShadowTableSelectType
  showAllSelectCheckbox?: boolean
  template?: any
  onPagination?: (tableState: TableState) => void
  onRowClick?: (event: ShadowClickEventOutput) => void
  onRowUnClick?: (event: ShadowClickEventOutput) => void
  selectAllHandler?: (columns: ColumnMetadata[]) => void
  onChangeEditInputHandler?: (event: ShadowClickEventOutput) => void
  onCellEditCompleteHandler?: (event: ShadowClickEventOutput) => void
}

const ShadowTable = ({
  editMode = 'normal',
  columnDefs = [],
  tableData = [],
  emptyMessage = 'No data available',
  showTableCaption = false,
  tableCaption = '',
  pagination = false,
  serverSidePagination = false,
  totalRecords = 0,
  rowsPerPage = 10,
  showFirstLastIcon = false,
  showGlobalFilter = false,
  tableSizeClass = 'p-datatable-lg',
  responseLayout = 'stack',
  responsiveLayoutBreakPoint = '960px',
  sortMode = undefined,
  emptyMeesageColSpan: propEmptyMeesageColSpan = 1,
  showCurrentPageReport = false,
  rowsPerPageOptions = [],
  currentPageReportTemplate = '',
  loading = false,
  first = 0,
  scrollable = false,
  scrollHeight = 'flex',
  virtualScroll = false,
  pageLinks = 0,
  showStripedRows = false,
  showGridLines = false,
  hideBorder = false,
  selectionMode = 'multiple',
  enableSelection = false,
  selectedRows = [],
  selectionType = null,
  showAllSelectCheckbox = false,
  orderBy,
  template,
  onPagination,
  onRowClick,
  onRowUnClick,
  selectAllHandler,
  onChangeEditInputHandler,
  onCellEditCompleteHandler
}: ShadowTableProps) => {
  const dataTable = useRef(null)
  const [showFilterRow, setShowFilterRow] = useState(false)
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
  })
  const [globalFilterFields, setGlobalFilterFields] = useState<string[]>([])
  const [globalFilterValue, setGlobalFilterValue] = useState<string>('')
  const [multiSortMeta, setMultiSortMeta] = useState<DataTableSortMeta[]>([])
  const [InnerselectedRows, setInnerselectedRows] = useState([])
  const [initialized, setInitialized] = useState(false)

  const [tableStyle, setTableStyle] = useState<any>('')
  const [emptyMeesageColSpan, setEmptyMeesageColSpan] = useState<number>(
    propEmptyMeesageColSpan
  )
  const [lazyState, setlazyState] = useState<LazyTableState>({
    first: 0,
    last: 10,
    rows: 10,
    page: 1,
    sortField: null,
    sortOrder: null,
    multiSortStateMeta: [],
    filters: {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    }
  })

  // useEffect(
  //   () => {
  //     columnDefs.forEach((data) => {
  //       if (data.enableFilter) {
  //         setShowFilterRow(true);
  //       }
  //       setGlobalFilterFields((prevFields) => [...prevFields, data.dataNodeName!]);
  //       const order = orderBy ? orderBy[data.key] : "";
  //       if (order) {
  //         setMultiSortMeta((prevMeta) => [
  //           ...prevMeta,
  //           {
  //             field: data.key ?? data.dataNodeName ?? data.columnName,
  //             order: order === "asc" ? 1 : -1,
  //           },
  //         ]);
  //       }
  //     });

  //     if (!emptyMeesageColSpan) {
  //       setEmptyMeesageColSpan(columnDefs.length > 0 ? columnDefs.length : 1);
  //     }

  //     if (selectionType === "radio") {
  //       setSelectionMode("single");
  //     }

  //     applyStyle();
  //   },
  //   [
  //     // columnDefs,
  //     // orderBy
  //   ]
  // );

  useEffect(
    () => {
      applyStyle()
    },
    [
      // tableSizeClass,
      // showStripedRows,
      // showGridLines,
      //  hideBorder
    ]
  )

  const applyStyle = () => {
    let style = ''

    if (tableSizeClass) {
      style = tableSizeClass
    }
    if (showStripedRows) {
      style = style + ' p-datatable-striped'
    }
    if (showGridLines) {
      style = style + ' p-datatable-gridlines'
    }
    if (hideBorder) {
      style = style + ' p-borderless'
    }
    setTableStyle(style)
    return style
  }

  // useEffect(
  //   () => {
  //     onPageChange();
  //   },
  //   [
  //     // lazyState
  //   ]
  // );

  // react alternative of LazyLoadEvent type
  const onPageChange = () => {
    if (!initialized) {
      setInitialized(true)
      return
    }

    let paginatorInfo: Partial<TableState> = {}
    paginatorInfo.orderBy = {}

    let currLazyState = lazyState

    if (currLazyState.sortField)
      paginatorInfo.orderBy[currLazyState.sortField] =
        currLazyState.sortOrder === 1 ? 'asc' : 'desc'

    for (const sortMeta of currLazyState.multiSortStateMeta ?? []) {
      paginatorInfo.orderBy[sortMeta.field] =
        sortMeta.order === 1 ? 'asc' : 'desc'
    }

    paginatorInfo.filterParams = []
    currLazyState.filters = currLazyState.filters ?? {}

    for (const key of Object.keys(currLazyState.filters)) {
      const filterMetaData = currLazyState.filters[key]

      if (filterMetaData) {
        paginatorInfo?.filterParams.push({
          key: key,
          value: filterMetaData
          //   operator: filterMetaData.matchMode!,
        })
      }
    }

    paginatorInfo.pageSize = currLazyState.rows ?? rowsPerPage

    if (currLazyState.rows !== rowsPerPage) {
      paginatorInfo.pageNo = 1
      paginatorInfo.first = 0
    } else {
      if (paginatorInfo?.pageSize)
        paginatorInfo.pageNo =
          (currLazyState.first! + paginatorInfo.pageSize) /
          paginatorInfo.pageSize
      paginatorInfo.first = currLazyState.first
    }

    paginatorInfo.last = currLazyState.last
    onPagination && onPagination(paginatorInfo)
  }

  const onRowSelect = (event: any) => {
    setInnerselectedRows(event.value)
    onRowClick && onRowClick({ data: event.value, context: event })
  }
  const onCellEditCompleteFunc = (event: any) => {
    onCellEditCompleteHandler && onCellEditCompleteHandler(event)
  }

  const onRowUnSelect = (event: any) => {
    onRowUnClick && onRowUnClick({ data: event.data, context: event })
  }

  const isRowSelectable = () => {
    return enableSelection
  }

  const selectAllItems = () => {
    selectAllHandler && selectAllHandler(selectedRows)
  }

  const onChangeEditInput = (colName: string, rowData: any) => {
    onChangeEditInputHandler &&
      onChangeEditInputHandler({
        data: rowData[colName],
        context: { rowData, colName: colName, type: 'INPUT' }
      })
  }

  const onChangeEditSelect = (event: any, rowData: any) => {
    onChangeEditInputHandler &&
      onChangeEditInputHandler({
        data: event,
        context: { rowData: rowData, type: 'SELECT' }
      })
  }

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    let _filters = { ...filters }

    // @ts-ignore
    _filters['global'].value = value

    setFilters(_filters)
    setGlobalFilterValue(value)
  }

  const TableCaption = () => {
    return (
      <>
        {showTableCaption || showGlobalFilter ? (
          <div className='table-caption'>
            {showTableCaption &&
              ((showTableCaption && tableCaption) === '' ? (
                <>
                  {/* {template(tableCaption, { columnName: "caption" })}  */}
                </>
              ) : (
                <p className='shadow-table-caption'>{tableCaption}</p>
              ))}
            {showGlobalFilter ? (
              <div className='align-right'>
                <span className='p-input-icon-left p-ml-auto shadow-table-global-filter'>
                  <i className='pi pi-search'></i>
                  <InputText
                    className='shadow-table-global-filter-input'
                    type='text'
                    value={globalFilterValue}
                    onChange={onGlobalFilterChange}
                    // onInput={(e) => onLazyLoad({ filters: { global: { value: e.target.value, matchMode: "contains" } } })}
                    placeholder='Search'
                  />
                </span>
              </div>
            ) : null}
          </div>
        ) : null}
      </>
    )
  }

  const cellEditor = (options: any) => {
    if (options.field === 'price') return priceEditor(options)
    else return textEditor(options)
  }

  const textEditor = (options: any) => {
    return (
      <InputText
        type='text'
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    )
  }

  const priceEditor = (options: any) => {
    return (
      <InputNumber
        value={options.value}
        onValueChange={(e) => options.editorCallback(e.value)}
        mode='currency'
        currency='USD'
        locale='en-US'
      />
    )
  }

  const priceBodyTemplate = (rowData: any) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(rowData.price)
  }

  return (
    <div className='shadow-table'>
      <DataTable
        ref={dataTable}
        value={tableData}
        paginator={pagination}
        rows={rowsPerPage}
        pageLinkSize={pageLinks || 5}
        totalRecords={totalRecords || tableData.length}
        lazy={serverSidePagination}
        globalFilterFields={globalFilterFields}
        //   onLazyLoad={onPageChange}
        // responsiveLayout={responseLayout}
        breakpoint={responsiveLayoutBreakPoint}
        sortMode={sortMode}
        // multiSortMeta={multiSortMeta}
        // tableClassName={applyStyle()}
        // {...(showCurrentPageReport && { currentPageReportTemplate: currentPageReportTemplate })}
        rowsPerPageOptions={rowsPerPageOptions}
        removableSort
        scrollable={scrollable}
        scrollHeight={scrollHeight}
        {...(virtualScroll && { virtualScrollerOptions: { itemSize: 10 } })}
        loading={loading}
        selectionMode={selectionMode}
        selection={InnerselectedRows}
        onSelectionChange={(e: any) => onRowSelect(e)}
        editMode={editMode}
        header={TableCaption()} //caption
      >
        {selectionType == 'checkbox' || selectionType == 'radiobutton' ? (
          <Column selectionMode={selectionMode}></Column>
        ) : null}

        {/* main columns */}
        {columnDefs.map((col) => {
          return editMode != 'cell' ? (
            <Column
              key={col?.key}
              className='shadow-table-header-row'
              header={col?.columnName}
              field={col?.dataNodeName}
              sortable={sortMode ? col?.sortable : false}
              style={{ width: col.width }}
              body={
                col.key == 'action'
                  ? template
                  : col.key === 'price' && priceBodyTemplate
              }
            ></Column>
          ) : (
            <Column
              key={col?.key}
              className='shadow-table-header-row'
              header={col?.columnName}
              field={col?.dataNodeName}
              sortable={sortMode ? col?.sortable : false}
              style={{ width: col.width }}
              body={
                col.key == 'action'
                  ? template
                  : col.key === 'price' && priceBodyTemplate
              }
              editor={(options) => cellEditor(options)}
              onCellEditComplete={onCellEditCompleteFunc}
            ></Column>
          )
        })}
      </DataTable>
    </div>
  )
}

export default ShadowTable
