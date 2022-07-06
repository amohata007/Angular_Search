import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  //created db using json server and fetching data
  fetchdata(){
    return this._http.get<any>('https://jsonplaceholder.typicode.com/albums/1/photos');
  }

  fetchphoto(idd:string){
    return this._http.get<any>('https://via.placeholder.com/150/'+idd);
  }

  deleteproduct(id:number){
    return this._http.delete<any>("https://jsonplaceholder.typicode.com/albums/1/photos/"+id)
  }

}
