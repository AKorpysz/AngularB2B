import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { OrderDto } from '../dto/OrderDto';
import { OrdersServiceMock } from '../mockServices/orders-mock.service';

@Injectable()
export class OrdersService {

  constructor(private dataService: OrdersServiceMock) { }

  getOrders(): Observable<OrderDto[]> {
    return this.dataService.getOrders();
  }

  getOrder(id: number): Observable<OrderDto> {
    return this.dataService.getOrder(id);
  }
}
