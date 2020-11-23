import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public searchKeyword="";
  constructor(private fetchDataService:FetchDataService ,private router:Router) { }
  
  ngOnInit(): void {
  }

  search(val)
  {
    this.searchKeyword=val;
    console.log(this.searchKeyword);
    // this.fetchDataService.fetch(val);
    this.router.navigate(['/category',val]);
  }
  searchByIsbn( val)
  {
    this.router.navigate(['/isbn',val]);
  }
  login()
  {
    console.log("ab form bhar do");
    this.router.navigate(['/login-form']);
  }
}
