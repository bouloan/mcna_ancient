import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-prices',
	templateUrl: './prices.page.html',
	styleUrls: [ './prices.page.scss' ]
})
export class PricesPage {
	constructor(private _meta: Meta, private _title: Title) {
		this._meta.addTags([
			{
				name: 'Tarifs',
				content:
					"En vous inscrivant à l'association Maison Chine Nouvelle-Aquitaine MCNA, vous bénéficiez de cours de chinois et de français à des prix avantageux."
			},
			{ name: 'author', content: 'Maison Chine Nouvelle-Aquitaine' },
			{
				name: 'keywords',
				content: 'tarifs, cours, chinois, français, Bordeaux'
			}
		]);
		this.setTitle('Tarifs');
	}

	setTitle(newTitle: string) {
		this._title.setTitle(newTitle);
	}
}
