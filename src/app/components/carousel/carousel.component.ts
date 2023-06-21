import { Component } from '@angular/core';

@Component({
  selector: 'meteora-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {

  imageList: string[] = [
    '../../../assets/Desktop/Banner carousel 1 _ 1440 (1).png',
    '../../../assets/Desktop/Banner carousel 2 _ 1440 (1).png',
    '../../../assets/Desktop/Banner carousel 3 _ 1440 (1).png'
  ]

}
