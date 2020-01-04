import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Activity } from '@interfaces/activity.interface';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: [ './home.page.scss' ]
})
export class HomeComponent implements OnInit, OnDestroy {
	images: string[];

	activitiesList: Activity[];
	private _unsubscribe$: Subject<void>;

	constructor(
		private _translateService: TranslateService,
		private _meta: Meta,
		private _title: Title
	) {
		this._meta.addTags([
			{
				name: 'description',
				content:
					'Maison Chine Nouvelle-Aquitaine MCNA propose des cours de chinois et de français, et des services de traduction sur Bordeaux.'
			},
			{ name: 'author', content: 'Maison Chine Nouvelle-Aquitaine' },
			{ name: 'keywords', content: 'cours, chinois, français, Bordeaux' }
		]);
		this.setTitle('Accueil');
	}

	ngOnInit() {
		this._unsubscribe$ = new Subject();

		this._translateService
			.stream('activities')
			.pipe(takeUntil(this._unsubscribe$))
			.subscribe((r) => {
				this.activitiesList = r;
			});
	}
	setTitle(newTitle: string) {
		this._title.setTitle(newTitle);
	}
	ngOnDestroy() {
		this._unsubscribe$.next();
		this._unsubscribe$.complete();
	}
}
