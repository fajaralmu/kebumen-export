import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
const DEFAULT_RESULT_WIDTH:number = 600;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  get motto():string 
  {
    return "Company motto".toUpperCase();
  }
  description:string = "Kabupetan Kabumen memiliki sejarah tersendiri yaitu berdiri Kabupaten Kebumen dimana maksud yang dikandung untuk memberikan rasa bangga dan memiliki bagi warga masyarakat Kabupaten Kebumen yang selanjutnya dapat menumbuh kembangkan potensi-potensi yang ada sehingga dapat memajukan pembangunan di segala bidang";

  ngOnInit(): void { }

  scrollToProduct()
  {
    document.getElementById('product_view')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact()
  {
    document.getElementById('about_view')?.scrollIntoView({ behavior: 'smooth' });
  }

}
