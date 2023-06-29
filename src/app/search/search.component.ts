import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {



  searchItem:string="";
constructor(private route:ActivatedRoute , private router:Router )
{

}
ngOnInit():void{
  this.route.params.subscribe(params =>{
    if(params['searchItem'])
    this.searchItem= params['searchItem'];

  });
}
search():void{
if(this.searchItem ){
  this.router.navigateByUrl('/search/' + this.searchItem);

}
}

// direct search
@Output()
searchTextchanged:EventEmitter<string> = new EventEmitter<string>();

onsearchText(){
  this.searchTextchanged.emit(this.searchItem);
  
}

}
