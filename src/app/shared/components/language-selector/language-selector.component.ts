import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '@services/languages.service';

@Component({
	selector: 'app-language-selector',
	templateUrl: './language-selector.component.html',
	styleUrls: [ './language-selector.component.scss' ]
})
export class LanguageSelectorComponent implements OnInit {
	constructor(private _language: LanguagesService) {}

	language: string;
	ngOnInit() {
		this.language = this._language.language;
	}

	onSelectLanguage(language: string) {
		this.language = language;
		this._language.storeLanguage(language);
	}
}
