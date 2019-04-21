import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages-content/header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PagesContentComponent } from './pages-content/pages-content.component';
import { PrimaryMenuComponent } from './side-menu/primary-menu/primary-menu.component';
import { SecondaryMenuComponent } from './side-menu/secondary-menu/secondary-menu.component';
import { CarouselComponent } from './pages-content/carousel/carousel.component';
import { TeamPresentationComponent } from './pages-content/team-presentation/team-presentation.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactModalComponent } from './modal/contact-modal/contact-modal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ActivityItemComponent } from './pages-content/carousel/activity-item/activity-item.component';
//import { HttpClient } from 'selenium-webdriver/http';


const appRoutes: Routes = [
	{ path: '', component: CarouselComponent },
	{ path: 'team-presentation', component: TeamPresentationComponent },
	/* 	{ path: 'contact', component: ContactComponent } */
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SideMenuComponent,
		PagesContentComponent,
		PrimaryMenuComponent,
		SecondaryMenuComponent,
		CarouselComponent,
		TeamPresentationComponent,
		ContactModalComponent,
		ActivityItemComponent,
	],
	imports: [
		NgbModule,
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		ReactiveFormsModule],
	entryComponents: [
		ContactModalComponent
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}
