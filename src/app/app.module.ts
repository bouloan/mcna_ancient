import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactModalComponent } from '@modal/contact-modal/contact-modal.component';
import { LoginModalComponent } from '@modal/login-modal/login-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SecondaryMenuComponent } from '../app/core/side-menu/secondary-menu/secondary-menu.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './core/header/header.component';
import { PrimaryMenuComponent } from './core/side-menu/primary-menu/primary-menu.component';
import { SideMenuComponent } from './core/side-menu/side-menu.component';
import { MessagesComponent } from './modules/back/messages/messages.component';
import { ActivityItemComponent } from './modules/home/component/activity-item/activity-item.component';
import { HomeComponent } from './modules/home/home.page';
import { PagesContentComponent } from './modules/pages-content.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    PagesContentComponent,
    PrimaryMenuComponent,
    SecondaryMenuComponent,
    HomeComponent,
    ActivityItemComponent,
    MessagesComponent
  ],
  imports: [
    SharedModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    MatIconModule
  ],
  entryComponents: [ContactModalComponent, LoginModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
