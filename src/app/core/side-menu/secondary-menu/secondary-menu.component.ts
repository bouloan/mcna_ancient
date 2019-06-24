import { Component } from '@angular/core';
import { SideMenuService } from '@services/side-menu/side-menu.service';

@Component({
  selector: 'app-secondary-menu',
  templateUrl: './secondary-menu.component.html',
  styleUrls: ['./secondary-menu.component.scss']
})
export class SecondaryMenuComponent {
  constructor(private _sideMenuService: SideMenuService) {}

  onCloseMenu() {
    this._sideMenuService.menuStatus = false;
  }
}
