import { Component } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct';

@Component({
  selector: 'meteora-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  productList: IProduct[] = [
    { name: 'Camiseta Conforto', imgSrc: '../../../assets/Desktop/Imagens Cards/Camiseta.png', price: 70, description: 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.', category: ['camiseta'] },
    { name: 'Calça Alfaiataria', imgSrc: '../../../assets/Desktop/Imagens Cards/Calça.png', price: 180, description: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!', category: ['calça'] },
    { name: 'Tênis Chunky', imgSrc: '../../../assets/Desktop/Imagens Cards/Tenis.png', price: 250, description: 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.', category: ['tenis'] },
    { name: 'Jaqueta Jeans', imgSrc: '../../../assets/Desktop/Imagens Cards/Jaqueta.png', price: 150, description: 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!', category: ['jaqueta'] },
    { name: 'Óculos Redondo', imgSrc: '../../../assets/Desktop/Imagens Cards/óculos.png', price: 120, description: 'Armação metálica em grafite com lentes arredondadas. Sem erro!', category: ['óculos'] },
    { name: 'Bolsa coringa', imgSrc: '../../../assets/Desktop/Imagens Cards/Bolsa.png', price: 120, description: 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!', category: ['bolsa'] },
  ]

}
