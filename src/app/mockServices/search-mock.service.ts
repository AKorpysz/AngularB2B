import { EventEmitter } from '@angular/core';

export class SearchServiceMock {
  private isDataNeeded = new EventEmitter<string>();
  private searchHints = new EventEmitter<string[]>();
  private searchFinishedData = new EventEmitter<string>();

  public isDataNeeded$ = this.isDataNeeded.asObservable();
  public searchHints$ = this.searchHints.asObservable();
  public searchFinishedData$ = this.searchFinishedData.asObservable();
}
