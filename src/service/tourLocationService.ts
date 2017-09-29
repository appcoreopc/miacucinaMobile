import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TourLocationService {
  _http: Http
  _data: any;
  _apiUrl: string = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=b291bfd938fc48aaa91e5e8b42e862b1";
  _url: string;
  _fakeData : any = [{"author":"Greg Kumparak","title":"Here’s everything Amazon announced today","description":"Amazon held an event in Seattle today, and the announcements were non-stop. From a new high-end Echo to talking fish, they had all sorts of stuff to show...","url":"https://techcrunch.com/gallery/heres-everything-amazon-announced-today/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/09/amazon-event-9270057.jpg?w=764&h=400&crop=1","publishedAt":"2017-09-27T20:03:55Z"},{"author":"Megan Rose Dickey","title":"Ikea has bought TaskRabbit","description":"TaskRabbit, the on-demand platform for hiring people to do everything from build furniture to stand in line for you at the Apple Store, has sold itself to..","url":"https://techcrunch.com/2017/09/28/ikea-buys-taskrabbit/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2016/04/taskrabbit-stacy-proofs-9-e1506621222378.jpg","publishedAt":"2017-09-28T15:52:50Z"},{"author":"Devin Coldewey","title":"Review: The SNES Classic Edition and all 21 games on it","description":"Riding high on the success (and mind-boggling scarcity) of the NES Classic Edition, Nintendo surprised no one with the announcement of the SNES Classic..","url":"https://techcrunch.com/2017/09/28/review-the-snes-classic-edition-and-all-21-games-on-it/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2017/09/snes_classic-9220041.jpg","publishedAt":"2017-09-28T15:06:33Z"},{"author":"Lucas Matney","title":"Magic Leap’s new website has some bizarre easter eggs for you to decipher","description":"Magic Leap very well could be one giant, well-funded performance art piece. Today, the augmented reality company (which, again, has yet to launch a product..","url":"https://techcrunch.com/2017/09/27/magic-leaps-new-website-has-some-bizarre-easter-eggs-for-you-to-decipher/","urlToImage":"https://tctechcrunch2011.files.wordpress.com/2015/06/magic-leap.png","publishedAt":"2017-09-28T02:34:12Z"}];
  
  constructor(public http: Http) {
    this._http = http;
  }

  getData() {
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