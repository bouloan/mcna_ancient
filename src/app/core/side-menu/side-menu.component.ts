import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService } from '@services/responsive.service';
import { SideMenuService } from '@services/side-menu/side-menu.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {
  deviceFormat: string;

  private _unsubscribe$: Subject<void>;

  constructor(
    private _sideMenuService: SideMenuService,
    private _responsiveService: ResponsiveService
  ) {}

  ngOnInit() {
    this._unsubscribe$ = new Subject();
    this.onResize();
  }

  onResize() {
    this._responsiveService.formatStatus
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(deviceFormat => (this.deviceFormat = deviceFormat));
  }

  onCloseMobileMenu() {
    this._sideMenuService.menuStatus = false;
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
