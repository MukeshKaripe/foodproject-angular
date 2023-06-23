import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { ChartItem } from 'chart.js';
import { CardItem } from '../shared/models/carditem';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  // food: Foods[] = [];
  cart!:Cart;
  constructor(private cartservice:CartService){
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
