import { AxiosError } from 'axios';

// export interface RestErrorResponse<T> {
//   statusCode: number;
//   errors: ErrorValidationMessage<T>[];
//   message: string;
// }

export type AxiosRestErrorResponse = AxiosError<any>;
