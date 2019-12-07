import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { LanguageSelectorComponent } from "@components/language-selector/language-selector.component";
import { ServiceItemComponent } from "@components/service-item/service-item.component";
import { RemoveWhiteSpacePipe } from "@custom-pipes/remove-white-space.pipe";
import { ContactModalComponent } from "@modal/contact-modal/contact-modal.component";
import { LoginModalComponent } from "@modal/login-modal/login-modal.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    LanguageSelectorComponent,
    ServiceItemComponent,
    LoginModalComponent,
    ContactModalComponent,
    RemoveWhiteSpacePipe
  ],
  imports: [CommonModule, TranslateModule.forChild(), ReactiveFormsModule],
  exports: [
    LanguageSelectorComponent,
    ServiceItemComponent,
    LoginModalComponent,
    ContactModalComponent,
    RemoveWhiteSpacePipe
  ]
})
export class SharedModule {}
