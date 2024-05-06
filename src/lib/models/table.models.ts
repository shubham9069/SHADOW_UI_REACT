import { Nullable } from 'primereact/ts-helpers'
import { Filter } from './data.models'

/**
 * Table component column definition type
 *
 * @interface ColumnMetadata
 * @field {string} columnName   : Table column name to display on UI
 * @field {string} dataNodeName : Data node name in JSON data array that will be mapped with this column
 * @field {boolean} sortable    : Used to make column sortable, by default false.
 */
export interface ColumnMetadata {
  key: string
  columnName: string
  dataNodeName?: string
  sortable?: boolean
  useTemplate?: boolean
  enableFilter?: boolean
  filterType?: string
  width?: string
  format?: { type: FormatType; outputFormat: string }
  isSelected?: boolean
}

export enum FormatType {
  DATE = 'date',
  PERCENT = 'percent',
  CURRENCY = 'currency',
  NUMBER = 'number',
  UPPERCASE = 'uppercase',
  LOWERCASE = 'lowercase'
}

export interface TableState {
  first?: number
  last?: number
  pageNo?: number
  pageSize?: number
  totalItems?: number
  totalRecords?: number
  orderBy?: Record<string, string>
  filterParams?: Filter[]
}

export interface ShadowTableMetaData {
  columnDefs: ColumnMetadata[]
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
  responseLayout?: string
  responsiveLayoutBreakPoint?: string
  sortMode?: 'single' | 'multiple'
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
}

export type ShadowTableSelectionMode = 'multiple' | 'single'

export type ShadowTableSelectType = 'checkbox' | 'radiobutton' | Nullable
