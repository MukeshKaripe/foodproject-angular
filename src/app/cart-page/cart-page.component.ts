import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { CardItem } from '../shared/models/carditem';
import { FoodService } from '../services/food/food.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
[x: string]: any;
  // food: Foods[] = [];
  cart!:Cart;
  constructor(private cartservice:CartService ,private foodservice:FoodService )
  // after design this is removed
  {
    // let foods = foodservice.getAll();
    // cartservice.addToCart(foods[1]);
    // cartservice.addToCart(foods[3]);

    // cartservice.addToCart(foods[5]);


    this.setcart();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  setcart(){
    this.cart =this.cartservice.getcart();

  }
  removefromcart(cartitem:CardItem ){
    this.cartservice.removefromcart(cartitem.food.id);
    this.setcart(); //instance Load Data



  }
  changeQuantity(cartitem:CardItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartservice.changeQuantity(cartitem.food.id,quantity);
    this.setcart();
    }
}

