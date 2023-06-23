import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute,Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.scss']
})
export class FoodpageComponent {

food!:Foods;
// constructor is used to inject (getting  values) from class importing to this class
constructor(private activatedRoute:ActivatedRoute ,
  private foodservice:FoodService,
  private cartservice:CartService,
  private router:Router ){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
     this.food= foodservice.getfoodid(params['id'])
      }
    })

}
addtocart(){
  this.cartservice.addToCart(this.food);
  this.router.navigateByUrl('/cart-page')


}

}
