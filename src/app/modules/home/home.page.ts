import { Component, OnDestroy, OnInit } from '@angular/core';
import { Activity } from '@models/activity.model';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  images: string[];

  activitiesList: Activity[];
  private _unsubscribe$: Subject<void>;

  constructor(private _translateService: TranslateService) {}

  ngOnInit() {
    this._unsubscribe$ = new Subject();

    this._translateService
      .stream('activities')
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(r => {
        this.activitiesList = r;
      });
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
