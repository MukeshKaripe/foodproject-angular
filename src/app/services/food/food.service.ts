import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoodByTag(tag:string): Foods[] {
    return tag == "All"?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

    //   if(tag == 'all'){
    // return this.getAll()

    //   }
    //   else
    //   return this.getAll().filter(food = food.tags?.includes(tag));

  }


  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'pizza'
        ,
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['fastFood', 'Pizza', 'Lunch'],


      },
      {
        id: 2,
        name: 'Meatball'
        ,
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['fastFood', 'Pizza', 'Lunch'],


      },
      {
        id: 3,
        name: 'pizza'
        ,
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['fastFood', 'Pizza', 'Lunch'],


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
        star: 4.5,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['fastFood', 'Pizza', 'Lunch'],


      },
      {
        id: 6,
        name: 'pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/food-7.jpg',
        tags: ['fastFood', 'Pizza', 'Lunch'],


      },
      {
        id: 7,
        name: 'Meatball'
        ,
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl:
          '/assets/images/food-8.jpg',
        tags: ['fastFood', 'Pizza', 'Lunch'],


      },

      {
        id: 8,
        name: 'pizza'
        ,
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/food-9.jpg',
        tags: ['fastFood', 'Pizza', 'Lunch'],


      },
      {
        id: 9,
        name: 'Meatball'
        ,
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl:
          '/assets/images/foods.jpg',
        tags: ['fastFood', 'Pizza', 'Lunch'],


      },
      {
        id: 10,
        name: 'Meatball'
        ,
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['fastFood', 'Pizza', 'Lunch'],


      }









    ]

  }

}
