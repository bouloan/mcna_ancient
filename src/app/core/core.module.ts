import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./header/header.component";
import { PrimaryMenuComponent } from "./side-menu/primary-menu/primary-menu.component";
import { SecondaryMenuComponent } from "./side-menu/secondary-menu/secondary-menu.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";

@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    PrimaryMenuComponent,
    SecondaryMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatIconModule,
    TranslateModule.forChild()
  ],
  exports: [SideMenuComponent, HeaderComponent]
})
export class CoreModule {
  //le code ci-dessous permet évite d'importer le module à plusieurs endroits
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded");
    }
  }
}
