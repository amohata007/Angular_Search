import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  //created db using json server and fetching data
  fetchdata(){
    return this._http.get<any>('http://localhost:3000/countrylist/');
  }

}
