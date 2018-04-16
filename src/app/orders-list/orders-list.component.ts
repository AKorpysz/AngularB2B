import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { OrdersService } from '../orders/orders.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { OrderDto } from '../dto/OrderDto';
import { ReturnStatement } from '@angular/compiler';
import { SearchService } from '../shared/search.service';
import { Subscription } from 'rxjs/Subscription';
import { Unsubscriber } from '../shared/unsubscriber';
import { OrderStatus } from '../dto/OrderStatus';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
@Unsubscriber
export class OrdersListComponent implements OnInit {
  dataSource = new MatTableDataSource<OrderDto>();
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ordersService: OrdersService, public searchService: SearchService, private router: Router) { }
  public selectedRowIndex = -1;
  private orderSubscription: Subscription;
  private searchSubscription: Subscription;
  private getPropmptsSubscription: Subscription;
  private colorWarn = 'yellow';
  private colorOk = 'green';
  private colorError = 'red';
  private colorDefault = 'black';

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

  getColor(status: OrderStatus) {
    if (!status) {
      return this.colorDefault;
    }
    switch (status) {
      case OrderStatus.WAITING:
        return this.colorWarn;
      case OrderStatus.REJECTED:
      case OrderStatus.ERROR:
        return this.colorError;
      case OrderStatus.ACCEPTED:
        return this.colorOk;
      default:
        return this.colorDefault;
    }
  }

  onRowClick(row) {
    const shouldRedirect = row.id === this.selectedRowIndex;
    this.selectedRowIndex = row.id;
    console.log(shouldRedirect);
    if (shouldRedirect) {
      console.log('Routed !');
      this.router.navigate(['/order', row.id]);
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
