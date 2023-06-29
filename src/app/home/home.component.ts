import { Component } from '@angular/core';

import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foods:Foods[]=[];
  selectedRating!: number;
  // ingredient!: string;
constructor(private fs:FoodService , private router:ActivatedRoute ){

}
ngOnInit():void{
  // subscribe is used to access given data
  // params property represents the route in angular
this.router.params.subscribe(params =>{
if(params['searchItem']){
  this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()) )
}  
else if(params['tag']){
this.foods=this.fs.getAllFoodByTag(params['tag']);
}
})
this.foods=this.fs.getAll();
}

// direct  search
 searchText:string='';

 onsearchTextenter(searchvalue:string){
  this.searchText= searchvalue;
  // console.log( this.searchText);
  
  
 }


}
