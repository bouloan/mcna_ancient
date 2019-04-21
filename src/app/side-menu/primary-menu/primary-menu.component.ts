import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ContactModalComponent } from 'src/app/modal/contact-modal/contact-modal.component';

@Component({
  selector: 'app-primary-menu',
  templateUrl: './primary-menu.component.html',
  styleUrls: ['./primary-menu.component.scss']
})
export class PrimaryMenuComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  initLoginModal() {
    const inputs = {
      isMobile: false
    }
    this.modalService.init(ContactModalComponent, inputs, {});
  }

}
