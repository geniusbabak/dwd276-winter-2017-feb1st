import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {
@Input() info;
condition = true;
  constructor() { }

  ngOnInit() {
  }
  changeCondition(){
    this.condition = !this.condition;
  }

}
