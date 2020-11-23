import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {IbookIsbn} from './IbookIsdn'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsbnService {
private _url="https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/books/";
private temp_url="";
constructor(private _http:HttpClient) { }
  fetch(category:string):Observable<IbookIsbn>
  {
    console.log("we recieved this from content tab");
    console.log(category)
    this.temp_url=this._url+category;
    console.log(this.temp_url);

     return  this._http.get<IbookIsbn>(this.temp_url);
  }

}
