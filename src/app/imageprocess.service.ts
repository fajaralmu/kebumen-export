import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import WebRequest from './models/WebRequest';
import WebResponse from './models/WebResponse';
import { ApplicationService } from './application.service'; 

//https://grokonez.com/angular-10-springboot-websocket-example
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

const host_:string = "http://localhost:8080/imagemosaic/";
const host :string =  "https://imagemosaic.herokuapp.com/";
const url:string = host+"app/generatemosaic"; 
const urlTest:string = host+"app/test"; 


@Injectable({
  providedIn: 'root'
})
export class ImageprocessService {

  constructor(private http:HttpClient, private appService:ApplicationService) { }
  private stompClient:any = null;
  private wsConnected:boolean = false;
  get wsHost():string {
    return host+"realtime-app";
  }
  connectWebsocket(onProgressCallback:(payload:WebResponse)=>any) {
    if ( this.wsConnected) return;
    const socket = new SockJS(this.wsHost);
    this.stompClient = Stomp.over(socket); 
    
    this.stompClient.connect({}, (frame:any) =>{
      // this.setConnected(true);
      console.log('Connected: ' + frame);
      this.wsConnected = true;
      this.stompClient.subscribe('/wsResp/progress/'+this.appService.getRequestId(), (response:any)=> {
        onProgressCallback(JSON.parse(response.body));
      });
    });
  }

  disconnectWebsocket() {
    if (!this.wsConnected) return;
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.wsConnected = (false);
    console.log('Disconnected!');
  }

  testServer():Observable<WebResponse> { 
    
    return this.http.get<WebResponse>(urlTest);
  }
  generateMosaicv2(imageData:string):Observable<Blob> {
    const req:WebRequest = {
      imageData: imageData
    }
    
    return this.http.post<Blob>(url, req,  { headers:{
      requestid:this.appService.getRequestId()
    }, responseType: 'blob' as 'json' });
  }
}
