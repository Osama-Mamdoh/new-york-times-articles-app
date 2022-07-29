import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiGatewayService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @param url Endpoint url
   * @param body  Request payload
   * @param additionalHeaders  Additional Header for the request if any
   * @param othersOption  Other options for HTTP post call excluding Headers i.e. observe , responseType etc
   * @returns Observable<ResultType> | Promise
   */
  post<ResultType>(
    url,
    body,
    additionalHeaders?: { [key: string]: string },
    othersOption?: { [key: string]: string }
  ): Observable<ResultType> {
    let headers = new HttpHeaders();
    if (additionalHeaders) {
      for (const key in additionalHeaders) {
        headers = headers.set(key, additionalHeaders[key]);
      }
    }
    const options = { headers, ...othersOption };
    return this.http.post<ResultType>(url, body, options);
  }

  /**
   *
   * @param url Endpoint url
   * @param additionalHeaders Request optional parameter if any
   * @param othersOption
   * @returns Observable<ResultType> | Promise
   */
  get<ResultType>(
    url: string,
    additionalHeaders?: { [key: string]: string },
    othersOption?: { [key: string]: string }
  ): Observable<ResultType> {
    let headers = new HttpHeaders();
    if (additionalHeaders) {
      for (const key in additionalHeaders) {
        headers = headers.set(key, additionalHeaders[key]);
      }
    }
    const options = { headers, ...othersOption };
    return this.http.get<ResultType>(url, options);
  }

  /**
   *
   * @param url Endpoint url
   * @param body  Request payload
   * @param additionalHeaders  Additional Header for the request  if any
   * @param othersOption  Other options for HTTP post call excluding Headers i.e. observe , responseType etc
   * @returns Observable<ResultType> | Promise
   */
  put<ResultType>(
    url,
    body,
    additionalHeaders?: { [key: string]: string },
    othersOption?: { [key: string]: string }
  ): Observable<ResultType> {
    let headers = new HttpHeaders();
    if (additionalHeaders) {
      for (const key in additionalHeaders) {
        headers = headers.set(key, additionalHeaders[key]);
      }
    }
    const options = { headers, ...othersOption };
    return this.http.put<ResultType>(url, body, options);
  }

  /**
   * Creates delete HTTP call
   * @param url
   * @param additionalHeaders
   * @param othersOption
   * @returns
   */
  deleteData<ResultType>(
    url,
    additionalHeaders?: { [key: string]: string },
    othersOption?: { [key: string]: string }
  ): Observable<ResultType> {
    let headers = new HttpHeaders();
    if (additionalHeaders) {
      for (const key in additionalHeaders) {
        headers = headers.set(key, additionalHeaders[key]);
      }
    }
    const options = { headers, ...othersOption };
    return this.http.delete<ResultType>(url, options);
  }
}
