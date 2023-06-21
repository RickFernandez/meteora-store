import { Component } from '@angular/core';
import { ICategory } from 'src/app/shared/models/ICategory';

@Component({
  selector: 'meteora-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  categoryList: ICategory[] = [
    { name: 'Camisetas', imgSrc: '../../../assets/Desktop/Categorias/Categoria camiseta.png' },
    { name: 'Bolsas', imgSrc: '../../../assets/Desktop/Categorias/Categoria Bolsa.png' },
    { name: 'Calçados', imgSrc: '../../../assets/Desktop/Categorias/Categoria Calçados.png' },
    { name: 'calças', imgSrc: '../../../assets/Desktop/Categorias/Categoria calça.png' },
    { name: 'Casacos', imgSrc: '../../../assets/Desktop/Categorias/Categoria casacos.png' },
    { name: 'Óculos', imgSrc: '../../../assets/Desktop/Categorias/Categoria óculos.png' },
  ]

}
