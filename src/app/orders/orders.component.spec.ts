import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { ScreenDetectorMock } from '../mockServices/screen-detector-mock.service';
import { ScreenDetectorService } from '../services/screen-detector.service';
import { MaterialModule } from '../material.module';
import { TestHelperService } from '../shared/test-helper.service.spec';
import { OrdersListComponent } from '../orders-list/orders-list.component';
import { OrdersListMobileComponent } from '../orders-list-mobile/orders-list-mobile.component';
import { OrderStatusFormatterPipe } from '../shared/orderStatusFormatter.pipe';
import { OrdersService } from './orders.service';
import { OrdersServiceMock } from '../mockServices/orders-mock.service';
import { SearchService } from '../shared/search.service';
import { SearchServiceMock } from '../mockServices/search-mock.service';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let mockDetector: ScreenDetectorMock;
  let testService: TestHelperService<OrdersComponent>;
  const routes: Routes = [];
  beforeEach(async(() => {
    mockDetector = new ScreenDetectorMock();
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterModule.forRoot(routes), BrowserAnimationsModule],
      declarations: [ OrdersComponent, OrdersListComponent, OrdersListMobileComponent, OrderStatusFormatterPipe ],
      providers: [
        { provide: ScreenDetectorService, useValue: mockDetector},
        { provide: OrdersService, useClass: OrdersServiceMock},
        { provide: SearchService, useClass: SearchServiceMock },
        { provide: APP_BASE_HREF, useValue : '/' }, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testService = new TestHelperService(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mobile in mobile', () => {
    mockDetector.isMobileFlag = true;
    fixture.detectChanges();
    testService.checkElementExist('#list-mobile');
  });

  it('should have desktop in dektop', () => {
    mockDetector.isMobileFlag = false;
    fixture.detectChanges();
    testService.checkElementExist('#list-desktop');
  });

  it('shouldn`t have mobile in dektop', () => {
    mockDetector.isMobileFlag = false;
    fixture.detectChanges();
    testService.checkElementNotExist('#list-mobile');
  });

  it('shouldn`t have dektop in mobile', () => {
    mockDetector.isMobileFlag = true;
    fixture.detectChanges();
    testService.checkElementNotExist('#list-desktop');
  });
});
