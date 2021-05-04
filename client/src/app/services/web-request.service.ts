import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly ROOT_URL;

  constructor(private _http: HttpClient) {
    this.ROOT_URL = '';
  }

  public get(uri: string) {
    return this._http.get(`${this.ROOT_URL}/${uri}`);
  }

  public post(uri: string, body: object) {
    return this._http.post(`${this.ROOT_URL}/${uri}`, body);
  }

  public put(uri: string, body: object) {
    return this._http.put(`${this.ROOT_URL}/${uri}`, body);
  }

  public delete(uri: string) {
    return this._http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
