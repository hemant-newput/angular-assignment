import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';
import { IsbnService } from '../isbn.service';

@Component({
  selector: 'app-isbn',
  templateUrl: './isbn.component.html',
  styleUrls: ['./isbn.component.css']
})
export class IsbnComponent implements OnInit {
  public category="";
  constructor(private _isbnService:IsbnService ,private route:ActivatedRoute) { }
  public isbnBooks;
  ngOnInit(): void { 
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let categorySelected=params.get("isbn");
      this.category=categorySelected;
    this._isbnService.fetch(this.category).subscribe(data=>this.isbnBooks=data);
    })
  }


} 