import { CardItem } from "./carditem";

export class Cart{
    items:CardItem[]=[];
    //array is used as type
get totalPrice():number{
    let totalprice = 0;
    this.items.forEach(item => {
  totalprice += item.price;
    });
    return totalprice;
}
}