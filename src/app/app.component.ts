import { Component, OnInit } from '@angular/core';

import { PoMenuItem } from '@portinari/portinari-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.setMenuItens();
  }

  constructor(
    private router: Router
  ) {}

  private _menuItems: Array<PoMenuItem> = [];

  get menuItems() {
    return this._menuItems;
  }

  private async setMenuItens() {
    this._menuItems.push(
      {
        label: 'Home',
        link: '/home',
        icon: 'po-icon-home'
      },
      {
        label: 'Usuários',
        link: '/cadastro-usuario',
        icon: 'po-icon-settings'
      }
    )
  }
}
