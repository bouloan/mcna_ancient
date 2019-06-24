import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {
  menuStatus: boolean;

  constructor() {
    this.menuStatus = false;
  }
}
