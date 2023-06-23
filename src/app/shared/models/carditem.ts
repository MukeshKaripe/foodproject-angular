import { Foods } from "./food";

export class CardItem{
    constructor(food:Foods){
this.food=food;
// this.price;
 //javascript code, you can write inside constructor
// important **
    }
    food:Foods;
    quantity:number = 1;
  get price():number{
        return this.food.price * this.quantity;
    }
}