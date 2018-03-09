import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { OrdersService } from '../orders/orders.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { OrderDto } from '../dto/OrderDto';
import { ReturnStatement } from '@angular/compiler';
import { SearchService } from '../shared/search.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  dataSource = new MatTableDataSource<OrderDto>();
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ordersService: OrdersService, public searchService: SearchService) { }

  private orderSubscription: Subscription;
  private searchSubscription: Subscription;
  private getPropmptsSubscription: Subscription;
  private colorWarn = 'yellow';
  private colorOk = 'green';
  private colorError = 'red';

  displayedColumns = [
    'id',
   'externalNumberTrade',
   'externalNumberSa',
   'status',
   'construction',
   'responsiblePerson',
   'dateCreation',
   'dateLimit'];
  ngOnInit(): void {
    let orders = new Array<OrderDto>();
    this.orderSubscription = this.ordersService.getOrders().subscribe(x => orders = x);
    this.dataSource = new MatTableDataSource(orders);
    this.getPropmptsSubscription = this.searchService.isDataNeeded$.subscribe(x => this.getPrompts(x));
    this.searchSubscription = this.searchService.searchFinishedData$.subscribe(x => this.search(x));
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.orderSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
    this.getPropmptsSubscription.unsubscribe();
  }

  search(phrase: string) {
    console.log('OrdersListComponent: ustawiam filtr dla frazy ' + phrase);
    phrase = phrase.trim();
    phrase = phrase.toLowerCase();
    this.dataSource.filter = phrase;
  }

  getPrompts(phrase: string) {
    console.log('OrdersListComponent: zwracam podpowiedzi dla ' + phrase);
    this.searchService.setHintsData([
      'Test zam1',
      'Test zam2'
    ]);
  }

}
