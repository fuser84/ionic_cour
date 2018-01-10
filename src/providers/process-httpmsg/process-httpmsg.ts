import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

/*
  Generated class for the ProcessHttpmsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProcessHttpmsgProvider {

  constructor(public http: Http) {
    console.log('Hello ProcessHttpmsgProvider Provider');
  }

  public extractData(res: Response) {
    //it is not needed to do this anymore with HttpClient
    let body = res.json();//parse JSON response into the JS object
    return body || {};
  }
  public handleError(error: Response | any) {
      let errMsg: string;

      if(error instanceof Response) {
        const body = error.json();
        const err = body.message || JSON.stringify(error);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      }else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.log(errMsg);
      return Observable.throw(errMsg);
  }
}
