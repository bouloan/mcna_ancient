import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ResponsiveService } from '@services/responsive.service';
import { SideMenuService } from '@services/side-menu/side-menu.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  deviceFormat: string;

  openLangSelector: boolean;
  private _unsubscribe$: Subject<void>;

  constructor(
    private translate: TranslateService,
    private _responsiveService: ResponsiveService,
    public _sideMenuService: SideMenuService
  ) {}

  ngOnInit() {
    this._unsubscribe$ = new Subject();

    this.openLangSelector = false;
    this.onResize();
    this._responsiveService.checkWidth();
  }

  useLanguage(event) {
    this.translate.use(event);
    localStorage.setItem('lang', event);
    this.openLangSelector = false;
  }

  onResize() {
    this._responsiveService.formatStatus
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(deviceFormat => (this.deviceFormat = deviceFormat));
  }

  onOpenMobileMenu() {
    this._sideMenuService.menuStatus = true;
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
