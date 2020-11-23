import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Ibook} from './Ibook'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
private _url="https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/search/";
private temp_url="";
constructor(private _http:HttpClient) { }
  fetch(category:string):Observable<Ibook>
  {
    console.log("we recieved this from content tab");
    console.log(category)
    this.temp_url=this._url+category;
    console.log(this.temp_url);
  //   console.log(category);
  //   return this._http.get<Ibook>(this._url);
     return  this._http.get<Ibook>(this.temp_url);
    // console.log(this._http.post<any>(this._url,category));
    // return this._http.post<any>(this._url,category)
// return {"error":"0","total":"85","page":"1","books":[{"title":"Learning Angular, 2nd Edition","subtitle":"A Hands-On Guide to Angular 2 and Angular 4","isbn13":"9780134576978","price":"$15.00","image":"https://itbook.store/img/books/9780134576978.png","url":"https://itbook.store/books/9780134576978"},{"title":"Full Stack AngularJS for Java Developers","subtitle":"Build a Full-Featured Web Application from Scratch Using AngularJS with Spring RESTful","isbn13":"9781484231975","price":"$35.85","image":"https://itbook.store/img/books/9781484231975.png","url":"https://itbook.store/books/9781484231975"},{"title":"Progressive Web Apps with Angular","subtitle":"Create Responsive, Fast and Reliable PWAs Using Angular","isbn13":"9781484244470","price":"$34.59","image":"https://itbook.store/img/books/9781484244470.png","url":"https://itbook.store/books/9781484244470"},{"title":"Angular for Material Design","subtitle":"Leverage Angular Material and TypeScript to Build a Rich User Interface for Web Apps","isbn13":"9781484254332","price":"$30.39","image":"https://itbook.store/img/books/9781484254332.png","url":"https://itbook.store/books/9781484254332"},{"title":"Learning AngularJS","subtitle":"A Guide to AngularJS Development","isbn13":"9781491916759","price":"$29.69","image":"https://itbook.store/img/books/9781491916759.png","url":"https://itbook.store/books/9781491916759"},{"title":"Angular: Up and Running","subtitle":"Learning Angular, Step by Step","isbn13":"9781491999837","price":"$29.98","image":"https://itbook.store/img/books/9781491999837.png","url":"https://itbook.store/books/9781491999837"},{"title":"Dependency Injection with AngularJS","subtitle":"Design, control, and manage your dependencies with AngularJS dependency injection","isbn13":"9781782166566","price":"$17.99","image":"https://itbook.store/img/books/9781782166566.png","url":"https://itbook.store/books/9781782166566"},{"title":"AngularJS Web Application Development Cookbook","subtitle":"Over 90 hands-on recipes to architect performant applications and implement best practices in AngularJS","isbn13":"9781783283354","price":"$22.64","image":"https://itbook.store/img/books/9781783283354.png","url":"https://itbook.store/books/9781783283354"},{"title":"AngularJS by Example","subtitle":"Learn AngularJS, and tackle the challenges of modern web development by creating your own applications with these practical examples you can use and adapt","isbn13":"9781783553815","price":"$24.99","image":"https://itbook.store/img/books/9781783553815.png","url":"https://itbook.store/books/9781783553815"},{"title":"AngularJS Essentials","subtitle":"Design and construct reusable, maintainable, and modular web applications with AngularJS","isbn13":"9781783980086","price":"$20.99","image":"https://itbook.store/img/books/9781783980086.png","url":"https://itbook.store/books/9781783980086"}]};
  }

} 
