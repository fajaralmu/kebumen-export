import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
import { ImageprocessService } from './../imageprocess.service';
import { doItLater } from './../util/EventUtil';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent implements OnInit {

  @Input() imageData?:string;
  @Output() onResult: EventEmitter<Blob> = new EventEmitter();
  @Output() onError: EventEmitter<any> = new EventEmitter();
  @Output() onBeforeSubmit: EventEmitter<any> = new EventEmitter();
  @Output() onReady: EventEmitter<any> = new EventEmitter();
  
  loading:boolean = false;
  error:boolean = false;
  errorMessage:string = "Error";
  
  constructor(private service: ImageprocessService) { } 

  submit():void{
    if (!this.imageData) return;
    this.loading = true;
    this.error = false;
    this.onBeforeSubmit.emit();
    this.service.generateMosaicv2(this.imageData).subscribe(
      (response:Blob)=>{
        this.loading = false;
        this.error = false;
        this.onResult.emit(response);
      }
      , (error) => {
        this.errorMessage = "Error, please try again or try another image or make current image smaller";
        this.loading = false;
        this.error = true;
       this.onError.emit(error);
    });
  }

  testServer(){
    this.loading = true;
    this.error = false;
    
    this.service.testServer().subscribe((response)=>{
      this.loading = false;
      this.error = false;
      this.onReady.emit();
    }, (error)=>{
      this.error = true;
      this.errorMessage = "Error calling server, will try again";
      doItLater(()=>{
        this.testServer();
      }, 1000);
    })
  }

  ngOnInit(): void {
    this.testServer();
  }

}
