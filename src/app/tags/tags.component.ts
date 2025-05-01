import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  @Input()
  foodPageTags?:string[];
  
  @Input()
  justifyContent:string = 'center';
  
  tags?: Tag[]=[];
  constructor(private fs:FoodService){
  }
  ngOnInit(): void {
  if(!this.foodPageTags)
    this.tags = this.fs.getAllTag();
  }

}
