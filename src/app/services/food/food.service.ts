import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';



@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor() { }

  getfoodid(id:number):Foods{
return this.getAll().find(food => food.id == id  )!; 
  }
  getAllFoodByTag(tag:string): Foods[] {
    return tag == "All"?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

    //   if(tag == 'all'){
    // return this.getAll()

    //   }
    //   else
    //   return this.getAll().filter(food = food.tags?.includes(tag));

  }

getAllTag():Tag[]{
  return[
    {name:'All',count:10},
    {name:'FastFood',count:4},

    {name:'Pizza',count:2,ex:42565},

    {name:'Lunch',count:3},
    {name:'SlowFood',count:2},
    {name:'Hamburger',count:3},
    {name:'cake',count:1},
    {name:'Soup',count:1},


  ];

}
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'SlowFood'
        ,
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['Fastfood', 'SlowFood', 'Lunch'],


      },
      {
        id: 2,
        name: 'Hamburger'
        ,
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['fastFood', 'Hamburger', 'Lunch'],


      },
      {
        id: 3,
        name: 'Cake'
        ,
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 1,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['fastFood', 'cake', 'Lunch'],


      },
      {
        id: 4,
        name: 'Meatball'
        ,
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl:
          '/assets/images/food-4.jpg',
        tags: ['fastFood', 'Pizza', 'Lunch'],


      },
      {
        id: 5,
        name: 'Meatball'
        ,
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['italy'],
        star: 2.5,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['fastFood', 'Lunch', 'Pizza'],


      },
      {
        id:6,
        name: 'Hamburger',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 3.5,
        imageUrl: '/assets/images/food-7.jpg',
        tags: ['fastFood', 'Hamburger', 'Lunch'],


      },
      {
        id: 7,
        name: 'Cherry'
        ,
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['italy'],
        star: 2.5,
        imageUrl:
          '/assets/images/food-8.jpg',
        tags: ['SlowFood', 'FastFood', 'Lunch'],


      },

      {
        id: 8,
        name: 'Soup'
        ,
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/food-9.jpg',
        tags: ['fastFood', 'Soup', 'Lunch'],


      },
      {
        id: 9,
        name: 'FastFood'
        ,
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['italy'],
        star: 1.5,
        imageUrl:
          '/assets/images/foods.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],


      },
      {
        id: 10,
        name: 'Hamburger'
        ,
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['Meatball', 'Hamburger', 'Lunch'],


      }









    ]

  }

}
