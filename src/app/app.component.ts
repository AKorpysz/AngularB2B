import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';

import { ScreenDetectorService } from './services/screen-detector.service';
import { SearchService } from './shared/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'B2B';
  isMobile() {
    return this.screenDetector.isMobile();
  }

  constructor(private screenDetector: ScreenDetectorService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {
    this.screenDetector.setDetectors(changeDetectorRef, media);
  }
}
