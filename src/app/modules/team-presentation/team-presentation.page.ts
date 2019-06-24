import { Component, OnDestroy, OnInit } from '@angular/core';
import { Presentation } from '@models/presentation.model';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-team-presentation',
  templateUrl: './team-presentation.page.html',
  styleUrls: ['./team-presentation.page.scss']
})
export class TeamPresentationPage implements OnInit, OnDestroy {
  presentation: Presentation;
  private _unsubscribe$: Subject<void>;

  constructor(private _translateService: TranslateService) {}

  ngOnInit() {
    this._unsubscribe$ = new Subject();

    this._translateService
      .stream('presentation')
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(presentation => (this.presentation = presentation));
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
