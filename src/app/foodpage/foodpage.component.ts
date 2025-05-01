import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../tags/tags.component';
import { CartService } from '../services/cart.service';
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: 'app-foodpage',
  standalone : true,
  imports: [StarRatingComponent, CommonModule, TagsComponent, NotFoundComponent],
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent implements OnInit{
  food!:Foods;

  constructor(private activatedRoute : ActivatedRoute, private foodService:FoodService, private cartService: CartService, private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
        this.food = foodService.getFoodById(params['id'])
    })
  }
  ngOnInit(): void {
      
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
