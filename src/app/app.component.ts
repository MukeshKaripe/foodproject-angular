import { Component } from '@angular/core';
import {  HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foodproject-angular';
  constructor(private http:HttpClient){}
data:any=null;
  getData(){
    this.http.get('https://fakestoreapi.com/products')
    .subscribe((data)=>{
      console.log(data);
      this.data=data;
      })
  }
}
