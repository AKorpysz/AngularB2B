import { Component } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Unsubscriber } from '../shared/unsubscriber';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
@Unsubscriber
export class SearchComponent  {
  public hints: string[];
  private hintsSubscription: Subscription;
  constructor(private searchService: SearchService) {
    this.hintsSubscription = this.searchService.searchHints$.subscribe(x => this.applySearchHints(x));
  }
  private applySearchHints(hints: string[]) {
    console.log('SearchComponent: otrzymałem wskazwki wyszukiwania');
    hints.forEach((element) => {
      console.log('Otrzymana podpowiedź: ' + element);
    });
    this.hints = hints;
  }

  getPrompts(boxValue: string) {
    boxValue = boxValue.trim();
    boxValue = boxValue.toLowerCase();
    console.log('SearchComponent: żądam wskazwek dla wartości ' + boxValue);
    this.searchService.sendRequestForData(boxValue);
  }

  search(filterValue: string) {
   console.log('SearchComponent: żądam wskazwek dla wartości ' + filterValue);
   this.searchService.setFinishedSearch(filterValue);
  }
}
