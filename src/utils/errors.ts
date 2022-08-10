import { throwError } from 'rxjs';

interface APIError {
  err: Error;
  api: string;
}

export function throwAPIError(err: any, api: string) {
  err.name = 'APIError';
  err.message = `Error in ${api}`;

  return throwError(() => err);
}
