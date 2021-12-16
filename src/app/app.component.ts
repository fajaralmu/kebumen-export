import { Component } from '@angular/core';

@Component({
  selector: 'div[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Universal Handmade'.toUpperCase();

  scrollTo(id:string)
  {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }
}
