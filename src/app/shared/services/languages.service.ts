import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LanguagesService {
	private _language: BehaviorSubject<string> = new BehaviorSubject<string>(null);

	constructor(private _translate: TranslateService, @Inject(PLATFORM_ID) private _platformId) {}

	setLanguage(lang) {
		this._language.next(lang);
	}

	get language() {
		if (isPlatformBrowser(this._platformId)) {
			return localStorage.getItem('lang');
		}
	}

	storeLanguage(lang) {
		localStorage.setItem('lang', lang);
		this._translate.use(lang);
	}
}
