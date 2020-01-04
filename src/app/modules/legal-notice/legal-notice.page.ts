import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-legal-notice',
	templateUrl: './legal-notice.page.html',
	styleUrls: [ './legal-notice.page.scss' ]
})
export class LegalNoticePage {
	constructor(private _meta: Meta, private _title: Title) {
		this._meta.addTags([
			{
				name: 'Mentions légales',
				content:
					'Maison Chine Nouvelle-Aquitaine MCNA propose des cours de chinois et de français, et des services de traduction sur Bordeaux.'
			},
			{ name: 'author', content: 'Maison Chine Nouvelle-Aquitaine' },
			{
				name: 'keywords',
				content: 'mentions légales, chinois, français, Bordeaux'
			}
		]);
		this.setTitle('Accueil');
	}

	setTitle(newTitle: string) {
		this._title.setTitle(newTitle);
	}
}
