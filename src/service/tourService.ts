import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TourService {
  _http: Http
  _data: any;
  _apiUrl: string = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=b291bfd938fc48aaa91e5e8b42e862b1";
  _url: string;

  constructor(public http: Http) {
    this._http = http;
  }

  getFeed() {
    if (this._data) {
      return Promise.resolve(this._data);
    }

    this._url = this._apiUrl;

    return new Promise(resolve => {
      this._http.get(this._url).map(
        x => x.json()).subscribe(
        data => {
          this._data = data;
          resolve(this._data);
        })
    });
  }
}