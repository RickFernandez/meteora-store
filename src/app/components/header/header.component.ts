import { Component } from '@angular/core';

@Component({
  selector: 'meteora-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuList: string[] = [
    'Home',
    'Nossas lojas',
    'Novidades',
    'Promoções',
  ]

  showMenu: boolean = false;

  onMenu(e: any) {
    !e.classList.contains('active') ? e.classList.add('active') : e.classList.remove('active');
    this.showMenu = !this.showMenu
  }
}
