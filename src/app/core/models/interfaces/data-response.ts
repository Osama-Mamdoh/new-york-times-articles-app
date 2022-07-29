export interface DataResponse {
  copyright: string;
  last_updated?: string;
  num_results?: number;
  results?: Array<any>;
  section?: string;
  response?: {
    docs: Array<any>;
    meta: { hits: number; offset: number; time: number };
  };
  status: string;
}
