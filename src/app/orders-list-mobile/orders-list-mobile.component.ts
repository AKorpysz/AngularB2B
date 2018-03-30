import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders/orders.service';
import { SearchService } from '../shared/search.service';
import { Subscription } from 'rxjs/Subscription';
import { MatTableDataSource } from '@angular/material';
import { OrderDto } from '../dto/OrderDto';

@Component({
  selector: 'app-orders-list-mobile',
  templateUrl: './orders-list-mobile.component.html',
  styleUrls: ['./orders-list-mobile.component.css']
})
export class OrdersListMobileComponent implements OnInit {
  private orderSubscription: Subscription;
  private searchSubscription: Subscription;
  private getPropmptsSubscription: Subscription;
  dataSource = new MatTableDataSource<OrderDto>();
  constructor(private ordersService: OrdersService, public searchService: SearchService) { }

  ngOnInit() {
    let orders = new Array<OrderDto>();
    this.orderSubscription = this.ordersService.getOrders().subscribe(x => orders = x);
    this.dataSource = new MatTableDataSource(orders);
    this.getPropmptsSubscription = this.searchService.isDataNeeded$.subscribe(x => this.getPrompts(x));
    this.searchSubscription = this.searchService.searchFinishedData$.subscribe(x => this.search(x));
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.orderSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
    this.getPropmptsSubscription.unsubscribe();
  }

  search(phrase: string) {
    console.log('OrdersListMobileComponent: ustawiam filtr dla frazy ' + phrase);
    phrase = phrase.trim();
    phrase = phrase.toLowerCase();
    this.dataSource.filter = phrase;
  }

  getPrompts(phrase: string) {
    console.log('OrdersListMobileComponent: zwracam podpowiedzi dla ' + phrase);
    this.searchService.setHintsData([
      'Mobile zam1',
      'Mobile zam2'
    ]);
  }

}
