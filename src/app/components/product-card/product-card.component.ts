import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct';

@Component({
  selector: 'meteora-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() productList!: IProduct[];

}
