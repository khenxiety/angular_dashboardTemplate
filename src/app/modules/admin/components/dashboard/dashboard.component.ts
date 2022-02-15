import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'Home';

  constructor() { }

  ngOnInit(): void {
  }

  forTitle(titles:any){
    this.title = titles;
    
  }

}
