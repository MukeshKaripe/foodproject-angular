import { Component,Input,OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';
import { Route } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit{
 @Input()
 foodpagetags?:string[];
 
  tags:Tag[]=[];
 constructor(private fs:FoodService ){

 }
 
 
  ngOnInit(): void {
    // important **
    if(!this.foodpagetags)
    this.tags=this.fs.getAllTag();
    throw new Error('Method not implemented.');
  }

}
