import { state, style, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalService } from '@services/modals/modal.service';
import { ResponsiveService } from '@services/responsive.service';
import { SideMenuService } from '@services/side-menu/side-menu.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
	animations: [
		trigger('openClose', [
			state(
				'openMenu',
				style({
					marginLeft: '0%'
				})
			),
			state(
				'closeMenu',
				style({
					marginLeft: '-65%'
				})
			),
			state(
				'dontPushOverlay',
				style({
					marginLeft: '-35%'
				})
			),
			state(
				'pushOverlay',
				style({
					marginLeft: '65%'
				})
			)
		])
	]
})
export class AppComponent implements OnInit, OnDestroy {
	deviceFormat: string;
	title = 'mcna';
	isMenuOpen: boolean;

	private _unsubscribe$: Subject<void>;

	constructor(
		private _modalService: ModalService,
		private _translate: TranslateService,
		private _responsiveService: ResponsiveService,
		public sideMenuService: SideMenuService
	) {
		_translate.setDefaultLang('fr');
	}

	ngOnInit() {
		this._unsubscribe$ = new Subject();
		this.onResize();

		let language: string = localStorage.getItem('lang');
		if (!language) {
			//remettre en place pour avoirla version française
			/*    let browserLang: string = this._translate.getBrowserLang();

                     if (browserLang !== 'zh-CN') {
                       browserLang = 'fr';
                     } */
			let browserLang = 'zh-CN';
			localStorage.setItem('lang', browserLang);
			language = localStorage.getItem('lang');
		}
		this._translate.use(language);
	}

	onResize() {
		this._responsiveService.checkWidth();
		this._responsiveService.formatStatus.subscribe((deviceFormat) => {
			this.deviceFormat = deviceFormat;
		});
	}

	onCloseSideMenu() {
		if (
			this.deviceFormat === 'sm' ||
			(this.deviceFormat === 'md' && this.sideMenuService.menuStatus === true)
		) {
			this.sideMenuService.menuStatus = false;
		}
	}

	ngOnDestroy() {
		this._unsubscribe$.next();
		this._unsubscribe$.complete();
	}
}
