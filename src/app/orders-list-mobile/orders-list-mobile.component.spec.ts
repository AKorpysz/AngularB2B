import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableDataSource } from '@angular/material';
import { OrdersListMobileComponent } from './orders-list-mobile.component';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersService } from '../orders/orders.service';
import { OrdersServiceMock } from '../mockServices/orders-mock.service';
import { SearchService } from '../shared/search.service';
import { SearchServiceMock } from '../mockServices/search-mock.service';

describe('OrdersListMobileComponent', () => {
  let component: OrdersListMobileComponent;
  let fixture: ComponentFixture<OrdersListMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,  BrowserAnimationsModule ],
      declarations: [OrdersListMobileComponent],
      providers: [
        { provide: OrdersService, useClass: OrdersServiceMock},
        { provide: SearchService, useClass: SearchServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
