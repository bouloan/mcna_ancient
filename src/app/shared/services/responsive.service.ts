import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResponsiveService {
  private _deviceFormat: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() {
    this.checkWidth();
  }

  onFormatChange(status: string) {
    this._deviceFormat.next(status);
  }

  get formatStatus(): BehaviorSubject<string> {
    return this._deviceFormat;
  }

  public checkWidth() {
    const width: number = window.innerWidth;

    if (width <= 501) {
      this.onFormatChange('sm');
    } else if (width > 501 && width <= 768) {
      this.onFormatChange('md');
    } else if (width > 768 && width <= 992) {
      this.onFormatChange('lg');
    } else {
      this.onFormatChange('xlg');
    }
  }
}
