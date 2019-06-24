import { Component } from '@angular/core';
import { ContactModalComponent } from '@modal/contact-modal/contact-modal.component';
import { ModalService } from '@services/modals/modal.service';
import { SideMenuService } from '@services/side-menu/side-menu.service';

@Component({
  selector: 'app-primary-menu',
  templateUrl: './primary-menu.component.html',
  styleUrls: ['./primary-menu.component.scss']
})
export class PrimaryMenuComponent {
  constructor(private _modalService: ModalService, private _sideMenuService: SideMenuService) {}

  initContactModal() {
    const inputs = {
      isMobile: false
    };
    this._modalService.init(ContactModalComponent, inputs, {});
  }

  onCloseMenu() {
    this._sideMenuService.menuStatus = false;
  }
}
