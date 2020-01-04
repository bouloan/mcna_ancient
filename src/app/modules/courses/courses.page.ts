import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Activity } from 'src/app/shared/interfaces/activity.interface';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.page.html',
	styleUrls: [ './courses.page.scss' ]
})
export class CoursesPage implements OnInit, AfterViewInit, OnDestroy {
	private _fragment: string;

	private _unsubscribe$: Subject<void>;

	coursesList: Activity[];

	imagesList: string[] = [
		'../../../assets/images/course/course-photo0.jpg',
		'../../../assets/images/course/course-photo1.jpg',
		'../../../assets/images/course/course-photo2.jpg'
	];

	constructor(
		private _translateService: TranslateService,
		private _route: ActivatedRoute,
		private _meta: Meta,
		private _title: Title
	) {
		this._meta.addTags([
			{
				name: 'description',
				content:
					'Maison Chine Nouvelle-Aquitaine MCNA propose des cours de chinois et de français sur Bordeaux.'
			},
			{ name: 'author', content: 'Maison Chine Nouvelle-Aquitaine' },
			{ name: 'keywords', content: 'cours, chinois, français, Bordeaux' }
		]);
		this.setTitle('Cours');
	}

	ngOnInit() {
		this._unsubscribe$ = new Subject();

		this._route.fragment.pipe(takeUntil(this._unsubscribe$)).subscribe((fragment) => {
			this._fragment = fragment;
		});
		this._translateService
			.stream('activities')
			.pipe(takeUntil(this._unsubscribe$))
			.subscribe((r) => {
				this.coursesList = r.filter((activity) => {
					return activity.type === 'course';
				});
			});
	}

	ngAfterViewInit() {
		try {
			document.querySelector('#' + this._fragment).scrollIntoView();
		} catch (e) {
			console.error(e);
		}
	}

	setTitle(newTitle: string) {
		this._title.setTitle(newTitle);
	}

	ngOnDestroy() {
		this._unsubscribe$.next();
		this._unsubscribe$.complete();
	}
}
