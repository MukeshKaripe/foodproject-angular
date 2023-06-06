import { Component,NgModule } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foods:Foods[]=[];
  value!: number;
constructor(private fs:FoodService){

}
ngOnInit():void{

this.foods=this.fs.getAll();
}
}
