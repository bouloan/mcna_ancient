import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Presentation } from 'src/app/shared/interfaces/presentation.interface';

@Component({
	selector: 'app-team-presentation',
	templateUrl: './team-presentation.page.html',
	styleUrls: [ './team-presentation.page.scss' ]
})
export class TeamPresentationPage implements OnInit, OnDestroy {
	presentation: Presentation;
	private _unsubscribe$: Subject<void>;

	constructor(
		private _translateService: TranslateService,
		private _meta: Meta,
		private _title: Title
	) {
		this._meta.addTags([
			{
				name: 'Présentation',
				content:
					"L'association Maison Chine Nouvelle-Aquitaine MCNA propose des cours de chinois et de français, et des services de traduction sur Bordeaux."
			},
			{ name: 'author', content: 'Maison Chine Nouvelle-Aquitaine' },
			{
				name: 'keywords',
				content: 'association, cours, chinois, français, Bordeaux'
			}
		]);
		this.setTitle('Présentation');
	}

	ngOnInit() {
		this._unsubscribe$ = new Subject();

		this._translateService
			.stream('presentation')
			.pipe(takeUntil(this._unsubscribe$))
			.subscribe((presentation) => (this.presentation = presentation));
	}

	setTitle(newTitle: string) {
		this._title.setTitle(newTitle);
	}

	ngOnDestroy() {
		this._unsubscribe$.next();
		this._unsubscribe$.complete();
	}
}
