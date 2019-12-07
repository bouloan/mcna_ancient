import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContactModalComponent } from "@modal/contact-modal/contact-modal.component";
import { LoginModalComponent } from "@modal/login-modal/login-modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { CoreModule } from "./core/core.module";
import { MessagesComponent } from "./modules/back/messages/messages.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, MessagesComponent],
  imports: [
    CoreModule,
    SharedModule,
    NgbModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
    ReactiveFormsModule
  ],
  entryComponents: [ContactModalComponent, LoginModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
