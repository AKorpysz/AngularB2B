import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { OrdersListComponent } from './orders-list.component';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersService } from '../orders/orders.service';
import { OrdersServiceMock } from '../mockServices/orders-mock.service';
import { SearchService } from '../shared/search.service';
import { SearchServiceMock } from '../mockServices/search-mock.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { OrderStatusFormatterPipe } from '../shared/orderStatusFormatter.pipe';
import { TestHelperService } from '../shared/test-helper.service.spec';
import { OrderStatus } from '../dto/OrderStatus';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { OrderDto } from '../dto/OrderDto';
import {Location} from '@angular/common';
describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;
  let router: Router;
  let location: Location;
  const routes: Routes = [
  ];
  let testService: TestHelperService<OrdersListComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterModule.forRoot(routes),  BrowserAnimationsModule ],
      declarations: [OrdersListComponent, OrderStatusFormatterPipe, OrderDetailsComponent],
      providers: [
        { provide: OrdersService, useClass: OrdersServiceMock},
        { provide: SearchService, useClass: SearchServiceMock },
        { provide: APP_BASE_HREF, useValue : '/' },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(OrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testService = new TestHelperService(fixture);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 8 columns', () => {
    const headerName = 'mat-header-row';
    testService.checkElementExistByCss(headerName);
    expect(testService.getChildrenLenghtOfForCssName(headerName)).toEqual(8);
  });

  it('should contain pagination ', () => {
    testService.checkElementExist('mat-paginator');
  });

  it('should contain sorting', () => {
    testService.checkAttributeExist('mat-table', 'matsort');
  });

  it('should have default color font for null status', () => {
    expect(component.getColor(null)).toEqual('black');
  });

  it('should have warn color font for waiting status', () => {
    expect(component.getColor(OrderStatus.WAITING)).toEqual('yellow');
  });

  it('should have error color font for rejected status', () => {
    expect(component.getColor(OrderStatus.REJECTED)).toEqual('red');
  });

  it('should have error color font for error status', () => {
    expect(component.getColor(OrderStatus.ERROR)).toEqual('red');
  });

  it('should have accepted color font for accepted status', () => {
    expect(component.getColor(OrderStatus.ACCEPTED)).toEqual('green');
  });
});
