import { Component, OnInit } from '@angular/core';
import { Flight } from '../Flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit() {
 
  };
 
  
  public startDes: string = '';
  public endDes: string = ''; 

}

