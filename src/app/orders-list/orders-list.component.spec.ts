import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListComponent } from './orders-list.component';

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListComponent ]
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

  it('should contain search ', () => {
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
