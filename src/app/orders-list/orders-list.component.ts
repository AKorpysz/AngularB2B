import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent  {

  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id',
  'title',
  'externalNumberTrade',
  'externalNumberSa',
  'status',
  'construction',
  'responsiblePerson',
  'dateCreation'];
  private colorWarn = 'yellow';
  private colorOk = 'green';
  private colorError = 'red';
  constructor() { }
}
