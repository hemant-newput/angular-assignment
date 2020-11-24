import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Output() childEvent=new EventEmitter();
  public categories=[
    {id:1,name:"html"},
    {id:2,name:"css"},
    {id:3,name:"jquery"},
    {id:4,name:"angular"},
    {id:5,name:"react"},
    {id:6, name:"python"},

  ];

  constructor(private fetchDataService:FetchDataService ,private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(category)
  {
    console.log(category.name)
    this.router.navigate(['/category',category.name]);
    // this.childEvent.emit(category.name);    
    
  }
}
