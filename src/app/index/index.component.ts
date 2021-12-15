import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Hero from './../models/Hero'; 
import { ImageprocessService } from './../imageprocess.service'; 
import { doItLater } from './../util/EventUtil';
import WebResponse from './../models/WebResponse';
const DEFAULT_RESULT_WIDTH:number = 600;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

 
  
  constructor(private service: ImageprocessService ) {
    
  } 

  ngOnInit(): void { }

    

}
