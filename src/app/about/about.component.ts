import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  phoneNumber:string  = "6287738539095";
  email:string        = "somabangsa@gmail.com";
  get contactUrl()
  {
    const url:string = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=Hallo%20Admin%20UniversalHandmade%0ASaya%20ingin%20bertanya%20tentang%20produk%20anda%20.`;
    return url;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
