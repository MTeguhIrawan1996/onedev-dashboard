import { AxiosError } from 'axios';

// export interface RestErrorResponse<T> {
//   statusCode: number;
//   errors: ErrorValidationMessage<T>[];
//   message: string;
// }

export type AxiosRestErrorResponse = AxiosError<any>;

export interface IMeta {
  page: number | null;
  size: number | null;
  total: number | null;
}
export interface GResponse<T> {
  meta: IMeta;
  data: T[];
}
