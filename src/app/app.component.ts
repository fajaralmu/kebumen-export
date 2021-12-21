import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  title:string          = 'Universal Handmade'.toUpperCase();
  toolbarClass:string   = "toolbar toolbar-bg-solid"; 
  
  scrollHandle() {
    console.log("Window scrollY: ", window.scrollY);
    if (window.scrollY > 100)
    {
      this.toolbarClass = "toolbar toolbar-bg-transparent";
    }
    else
    {
      this.toolbarClass = "toolbar toolbar-bg-solid";
    }
  }

  ngOnInit(): void {
    window.onscroll = (e:Event) => this.scrollHandle();
  }
  

  scrollTo(id:string)
  {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }
}
