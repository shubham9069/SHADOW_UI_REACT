export interface KeyMapper {
  key: string;
  desc?: string;
  label?: string;
  filterKey?: string;
  selectKey?: string;
  format?: string;
}

export interface Filter {
  key: string;
  operator?: string;
  value: any;
}

export interface RequestModel {
  select?: string[];
  filter?: Filter[];
  orderBy?: any;
  groupBy?: string[];
  pageSize?: number;
  pageNo?: number;
  scope?: Record<string, any>;
}

export interface SendRequestModel extends RequestModel {
  type?: string;
  body?: RequestModel;
  mode?: string;
}

export interface RequestOptions {
  ignoreCache?: boolean;
  token?: string;
  options?: any;
}

type ResponseTypes = 'Success' | 'Error' | 'Fatal' | 'Warning' | 'ErrorWarning' | 'SuccessWarning';

export interface ResponseModel {
  errorCode: string;
  messageKey: string;
  messageValue: string;
  responseType: ResponseTypes;
  data: any;
  error?: any;
  errors?: any;
}
