import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  private isDataNeeded = new EventEmitter<string>();
  private searchHints = new EventEmitter<string[]>();
  private searchFinishedData = new EventEmitter<string>();

  public isDataNeeded$ = this.isDataNeeded.asObservable();
  public searchHints$ = this.searchHints.asObservable();
  public searchFinishedData$ = this.searchFinishedData.asObservable();

  sendRequestForData(searchData: string) {
    console.log('SearchService: Wysyłam żądanie podpowiedzi');
    this.isDataNeeded.emit(searchData);
  }

  setHintsData(hintData: string[]) {
    console.log('SearchService: Wysyłam podpowiedzi');
    this.searchHints.emit(hintData);
  }

  setFinishedSearch(finishedData: string) {
    console.log('SearchService: Kończe wyszukiwanie');
    this.searchFinishedData.emit(finishedData);
  }
}
