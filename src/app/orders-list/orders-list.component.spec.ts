import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { OrdersListComponent } from './orders-list.component';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersService } from '../orders/orders.service';
import { OrdersServiceMock } from '../mockServices/orders-mock.service';
import { SearchService } from '../shared/search.service';
import { SearchServiceMock } from '../mockServices/search-mock.service';
import { RouterModule, Routes } from '@angular/router';
import { OrderStatusFormatterPipe } from '../shared/orderStatusFormatter.pipe';
describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;
  const routes: Routes = [];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterModule.forRoot(routes),  BrowserAnimationsModule ],
      declarations: [OrdersListComponent, OrderStatusFormatterPipe],
      providers: [
        { provide: OrdersService, useClass: OrdersServiceMock},
        { provide: SearchService, useClass: SearchServiceMock },
        { provide: APP_BASE_HREF, useValue : '/' },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 8 columns', () => {
    fail();
  });

  it('should contain pagination ', () => {
    fail();
  });

  it('should contain sorting', () => {
    fail();
  });

  it('should color font for status', () => {
    fail();
  });

  it('should have correct date format', () => {
    fail();
  });

  it('should redirect after click', () => {
    fail();
  });

  it('should export to csv', () => {
    fail();
  });

});
