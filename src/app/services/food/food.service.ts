import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!
  }

  getAllTag():Tag[]{
    return[
      {name: 'All', count:12},
      {name: 'FastFood', count:4},
      {name: 'Bakery', count:2},
      {name: 'Sweet', count:2},
      {name: 'Salad', count:3},
      {name: 'Health', count:3},
      {name: 'Curries', count:1},
    ]

  }

  getAllFoodByTag(tag:string) : Foods[]{
    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAll(): Foods[]{
    return[
      {
        id:1,
        name:'Cheese Burger',
        price:80,
        cookTime:'10-20',
        favorite:true,
        origins:['USA', 'Korea'],
        stars:4.5,
        imageUrl: 'food1.jpg',
        tags: ['Bakery', 'Burger'],
      },
      {
        id:2,
        name:'Vegitable Salad',
        price:60,
        cookTime:'10-20',
        favorite:true,
        origins:['India', 'Asia'],
        stars:4.2,
        imageUrl: 'food2.jpg',
        tags: ['Salad', 'Health'],
      },
      {
        id:3,
        name:'French Fries',
        price:100,
        cookTime:'5-10',
        favorite:false,
        origins:['Russia', 'Asia'],
        stars:4.5,
        imageUrl: 'food3.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id:4,
        name:'Mix Spices Salad',
        price:150,
        cookTime:'10-20',
        favorite:true,
        origins:['India', 'Asia'],
        stars:4.0,
        imageUrl: 'food4.jpg',
        tags: ['FastFood', 'Salad'],
      },
      {
        id:5,
        name:'Pizza',
        price:200,
        cookTime:'20-30',
        favorite:true,
        origins:['USA', 'England'],
        stars:4.0,
        imageUrl: 'food5.jpg',
        tags: ['FastFood', 'Bakery'],
      },
      {
        id:6,
        name:'chicken Nuggets',
        price:100,
        cookTime:'10-20',
        favorite:false,
        origins:['India', 'Asia'],
        stars:3.5,
        imageUrl: 'food6.jpg',
        tags: ['FastFood', 'DeepFry'],
      },
      {
        id:7,
        name:'Paneer',
        price:120,
        cookTime:'10-20',
        favorite:false,
        origins:['India', 'Asia'],
        stars:5.0,
        imageUrl: 'food7.jpg',
        tags: ['Curries', 'Spicy'],
      },
      {
        id:8,
        name:'Sugar Candy',
        price:100,
        cookTime:'10-20',
        favorite:false,
        origins:['India', 'Australia'],
        stars:3.0,
        imageUrl: 'food8.jpg',
        tags: ['Candy', 'Sweet'],
      },
      {
        id:9,
        name:'Gulab Jamun',
        price:50,
        cookTime:'10-20',
        favorite:true,
        origins:['India', 'Asia'],
        stars:3.3,
        imageUrl: 'food9.jpg',
        tags: ['Sweet', 'Sugar'],
      },
      {
        id:10,
        name:'Chips Salaad Mix',
        price:100,
        cookTime:'10-20',
        favorite:false,
        origins:['India', 'Asia'],
        stars:3.5,
        imageUrl: 'food10.jpg',
        tags: ['Chips', 'Fry'],
      },
      {
        id:11,
        name:'Berries Salad',
        price:100,
        cookTime:'10',
        favorite:true,
        origins:['india', 'asia'],
        stars:4.5,
        imageUrl: 'food11.jpg',
        tags: ['Healthy', 'Fresh'],
      },
      {
        id:12,
        name:'Nuts salad with Spice',
        price:100,
        cookTime:'10-20',
        favorite:true,
        origins:['India', 'Asia'],
        stars:5.0,
        imageUrl: 'food12.jpg',
        tags: ['Fresh', 'Fruitfull'],
      }
    ]
  }
}
