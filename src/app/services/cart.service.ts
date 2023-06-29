import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Foods } from '../shared/models/food';
import { CardItem } from '../shared/models/carditem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = new Cart();
  constructor() { }



  addToCart(food:Foods):void
{
  let cartitem = this.cart.items.find(item => item.food.id === food.id)
  if(cartitem){
    this.changeQuantity(food.id , cartitem.quantity +1)
return;
        
  } 
  this.cart.items.push(new CardItem(food));
}
removefromcart(foodId:number):void{
  this.cart.items = this.cart.items.filter(item => item.food.id!= foodId)
}
changeQuantity(foodId:number,quantity:number){

let cartitem = this.cart.items.find(item => item.food.id === foodId);
console.log(cartitem);

if(!cartitem)return;

cartitem.quantity = quantity;

}
getcart():Cart{
 return this.cart;
}
}
