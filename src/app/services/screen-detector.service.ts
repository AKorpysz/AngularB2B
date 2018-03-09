import { Injectable, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ScreenDetectorInterface } from './screen-detector.interface';

@Injectable()
export class ScreenDetectorService
  implements ScreenDetectorInterface, OnDestroy {
  private mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  setDetectors(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public isMobile(): boolean {
    if (this.mobileQuery !== null && this.mobileQuery !== undefined) {
      return this.mobileQuery.matches;
    }
    return false;
  }
}
