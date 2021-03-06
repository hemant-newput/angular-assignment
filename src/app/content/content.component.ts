import { Component, OnInit,Input } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { ActivatedRoute, ParamMap } from "@angular/router";


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public books:Ibook;
  
  public category:string;
  // public books={"error":"0","total":"67","page":"1","books":[{"title":"Practical MongoDB","subtitle":"Architecting, Developing, and Administering MongoDB","isbn13":"9781484206485","price":"$9.05","image":"https://itbook.store/img/books/9781484206485.png","url":"https://itbook.store/books/9781484206485"},{"title":"The Definitive Guide to MongoDB, 3rd Edition","subtitle":"A complete guide to dealing with Big Data using MongoDB","isbn13":"9781484211830","price":"$49.99","image":"https://itbook.store/img/books/9781484211830.png","url":"https://itbook.store/books/9781484211830"},{"title":"MongoDB in Action, 2nd Edition","subtitle":"Covers MongoDB version 3.0","isbn13":"9781617291609","price":"$19.99","image":"https://itbook.store/img/books/9781617291609.png","url":"https://itbook.store/books/9781617291609"},{"title":"Pentaho Analytics for MongoDB","subtitle":"Combine Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions","isbn13":"9781782168355","price":"$16.99","image":"https://itbook.store/img/books/9781782168355.png","url":"https://itbook.store/books/9781782168355"},{"title":"Pentaho Analytics for MongoDB Cookbook","subtitle":"Over 50 recipes to learn how to use Pentaho Analytics and MongoDB to create powerful analysis and reporting solutions","isbn13":"9781783553273","price":"$35.99","image":"https://itbook.store/img/books/9781783553273.png","url":"https://itbook.store/books/9781783553273"},{"title":"Web Development with MongoDB and NodeJS, 2nd Edition","subtitle":"Build an interactive and full-featured web application from scratch using Node.js and MongoDB","isbn13":"9781785287527","price":"$38.01","image":"https://itbook.store/img/books/9781785287527.png","url":"https://itbook.store/books/9781785287527"},{"title":"MongoDB Cookbook, 2nd Edition","subtitle":"Harness the latest features of MongoDB 3 with this collection of 80 recipes - from managing cloud platforms to app development, this book is a vital resource","isbn13":"9781785289989","price":"$44.99","image":"https://itbook.store/img/books/9781785289989.png","url":"https://itbook.store/books/9781785289989"},{"title":"The Little MongoDB Book","subtitle":"","isbn13":"1001592208320","price":"$0.00","image":"https://itbook.store/img/books/1001592208320.png","url":"https://itbook.store/books/1001592208320"},{"title":"Node.js, MongoDB and Angular Web Development, 2nd Edition","subtitle":"The definitive guide to using the MEAN stack to build web applications","isbn13":"9780134655536","price":"$33.16","image":"https://itbook.store/img/books/9780134655536.png","url":"https://itbook.store/books/9780134655536"},{"title":"The Definitive Guide to MongoDB","subtitle":"The NoSQL Database for Cloud and Desktop Computing","isbn13":"9781430230519","price":"$8.83","image":"https://itbook.store/img/books/9781430230519.png","url":"https://itbook.store/books/9781430230519"}]};
  constructor( private _fetchDataService:FetchDataService ,private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
  // let categorySelected=this.route.snapshot.paramMap.get('name');
  // this.category=categorySelected;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let categorySelected=params.get("name");
      this.category=categorySelected;
    this._fetchDataService.fetch(this.category).subscribe(data=>this.books=data);
    console.log(this.books)

    })
// console.log("Here is the category recieved by url pattern "+this.category);
// console.log("data recieved by servcie");
//console.log("parent data recoieved" +this.parentData)
  }
} 
