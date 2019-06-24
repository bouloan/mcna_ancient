import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from '@models/activity.model';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-interpreting',
  templateUrl: './interpreting.page.html',
  styleUrls: ['./interpreting.page.scss']
})
export class InterpretingPage implements OnInit, AfterViewInit, OnDestroy {
  private _fragment: string;

  interpretingList: Activity[];

  private _unsubscribe$: Subject<void>;

  imagesList: string[] = ['../../../assets/images/interpreting/interpreting-photo0.jpg'];

  constructor(private _translateService: TranslateService, private _route: ActivatedRoute) {}

  ngOnInit() {
    this._unsubscribe$ = new Subject();

    this._route.fragment.pipe(takeUntil(this._unsubscribe$)).subscribe(fragment => {
      this._fragment = fragment;
    });
    this._translateService
      .stream('activities')
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(r => {
        this.interpretingList = r.filter(activity => {
          return activity.type === 'interpreting';
        });
      });
  }

  ngAfterViewInit() {
    try {
      document.querySelector('#' + this._fragment).scrollIntoView();
    } catch (e) {}
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
