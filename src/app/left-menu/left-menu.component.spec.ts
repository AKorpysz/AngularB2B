import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuComponent } from './left-menu.component';
import { MaterialModule } from '../material.module';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { TestHelperService } from '../shared/test-helper.service.spec';
import { ScreenDetectorService } from '../services/screen-detector.service';
import { ScreenDetectorMock } from '../mockServices/screen-detector-mock.service';

describe('LeftMenuComponent', () => {
  let component: LeftMenuComponent;
  let fixture: ComponentFixture<LeftMenuComponent>;
  const routes: Routes = [];
  let testService: TestHelperService<LeftMenuComponent>;
  let mockDetector: ScreenDetectorMock;
  beforeEach(async(() => {
    mockDetector = new ScreenDetectorMock();
    TestBed.configureTestingModule({
      imports: [MaterialModule,  RouterModule.forRoot(routes) ],
      declarations: [ LeftMenuComponent, MenuButtonComponent],
      providers: [
        { provide: ScreenDetectorService, useValue: mockDetector},
        { provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testService = new TestHelperService(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exist button orders', () => {
    testService.checkElementExist('#button-orders');
  });

  it('exist button products', () => {
    testService.checkElementExist('#button-products');
  });

  it('exist button options', () => {
    testService.checkElementExist('#button-options');
  });

  it('exist button logout', () => {
    testService.checkElementExist('#button-logout');
  });

  it('exist image for mobile', () => {
    mockDetector.isMobileFlag = true;
    fixture.detectChanges();
    testService.checkElementExist('#logo-image');
  });

  it('not exist image for desktop', () => {
    mockDetector.isMobileFlag = false;
    fixture.detectChanges();
    testService.checkElementNotExist('#logo-image');
  });
});
