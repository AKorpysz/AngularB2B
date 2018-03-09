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
    private media: MediaMatcher,
    private searchService: SearchService) {
    this.screenDetector.setDetectors(changeDetectorRef, media);
    this.searchService.searchHints$.subscribe(x => this.applySearchHints(x));
  }

  private applySearchHints(hints: string[]) {
    console.log('AppComponent: otrzymałem wskazwki wyszukiwania');
  }

  getPrompts(boxValue: string) {
    boxValue = boxValue.trim();
    boxValue = boxValue.toLowerCase();
    console.log('AppComponent: żądam wskazwek dla wartości ' + boxValue);
    this.searchService.sendRequestForData(boxValue);
  }

  search(filterValue: string) {
   console.log('AppComponent: żądam wskazwek dla wartości ' + filterValue);
   this.searchService.setFinishedSearch(filterValue);
  }
}
