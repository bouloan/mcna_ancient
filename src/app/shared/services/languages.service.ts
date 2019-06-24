import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private _language: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private _translate: TranslateService) {}

  setLanguage(lang) {
    this._language.next(lang);
  }

  /*   get language() {
    return this._language;
  }
 */
  get language() {
    return localStorage.getItem('lang');
  }

  storeLanguage(lang) {
    localStorage.setItem('lang', lang);
    this._translate.use(lang);
  }
}
