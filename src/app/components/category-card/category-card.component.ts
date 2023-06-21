import { Component, Input } from '@angular/core';
import { ICategory } from 'src/app/shared/models/ICategory';

@Component({
  selector: 'meteora-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  
  @Input() categoryList!: ICategory[];
  
}
