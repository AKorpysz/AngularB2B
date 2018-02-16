import { ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

export class ScreenDetectorMock {
  isMobileFlag = false;
  isMobile(): boolean {
    return this.isMobileFlag;
  }

  setDetectors(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

  }
}
