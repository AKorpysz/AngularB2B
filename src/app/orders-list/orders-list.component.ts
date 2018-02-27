import { Component, ViewChild, OnInit } from '@angular/core';
import { OrdersService } from '../orders/orders.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { OrderDto } from '../dto/OrderDto';

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

  constructor(private ordersService: OrdersService) { }

  displayedColumns = [
   'id',
  'externalNumberTrade',
  'externalNumberSa',
  'status',
  'construction',
  'responsiblePerson',
  'dateCreation',
  'dateLimit'];
  private colorWarn = 'yellow';
  private colorOk = 'green';
  private colorError = 'red';

  ngOnInit(): void {
    let orders = new Array<OrderDto>();
    this.ordersService.getOrders().subscribe(x => orders = x);
    this.dataSource = new MatTableDataSource(orders);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
