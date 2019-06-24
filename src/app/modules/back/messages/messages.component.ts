import { Component, OnInit } from '@angular/core';
import { LoginModalComponent } from '@modal/login-modal/login-modal.component';
import { ModalService } from '@services/modals/modal.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  constructor(private _modalService: ModalService, private _authService: AuthService) {}

  ngOnInit() {
    // initiation de la modal d'identification
    setTimeout(() => {
      if (!this._authService.loggedIn()) {
        const inputs = {
          isMobile: false
        };
        this._modalService.init(LoginModalComponent, inputs, {});
      }
    });
  }
}
