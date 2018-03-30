import { TestBed, inject } from '@angular/core/testing';
import { OrdersService } from './orders.service';
import { OrdersServiceMock } from '../mockServices/orders-mock.service';

describe('OrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersService, OrdersServiceMock]
    });
  });

  it('should be created', inject([OrdersService], (service: OrdersService) => {
    expect(service).toBeTruthy();
  }));
});
