import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maison-chine';

  constructor(private modalService: ModalService, private translate: TranslateService) {
    translate.setDefaultLang('fr');
  }


}
