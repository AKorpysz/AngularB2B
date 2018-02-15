import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuButtonComponent } from './menu-button.component';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { MaterialModule } from '../material.module';
import { Routes, RouterModule } from '@angular/router';
import { TestHelperService } from '../shared/test-helper.service';

describe('MenuButtonComponent', () => {
  let component: MenuButtonComponent;
  let fixture: ComponentFixture<MenuButtonComponent>;
  let testService: TestHelperService;

  const routes: Routes = [];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule,  RouterModule.forRoot(routes) ],
      declarations: [ MenuButtonComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
    testService = new TestHelperService();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exist tooltip', () => {
    testService.checkElementExist(fixture, '#tooltip');
  });

  it('exist icon', () => {
    testService.checkElementExist(fixture, '#icon');
  });

  it('exist label', () => {
    testService.checkElementExist(fixture, '#caption-label');
  });

  it('exist button', () => {
    testService.checkElementExist(fixture, '#button');
  });

  it('has toolTip', () => {
    const testedValue = 'tip';
    component.tooltip = testedValue;
    testService.checkAttributeExist(fixture, '#tooltip', 'ng-reflect-message');
  });

  it('is toolTip on the right', () => {
    const testedValue = 'tip';
    component.tooltip = testedValue;
    testService.checkAttributeValue(fixture, '#tooltip', 'mattooltipposition', 'right');
  });

  it('bind toolTip', () => {
    const testedValue = 'tip';
    component.tooltip = testedValue;
    testService.checkAttributeValue(fixture, '#tooltip', 'ng-reflect-message', testedValue);
  });

  it('bind icon', () => {
    const testedValue = 'add';
    component.icon = testedValue;
    testService.checkElementTextValue(fixture, '#icon', testedValue);
  });

  it('bind name', () => {
    const testedValue = 'Test';
    component.caption = testedValue;
    testService.checkElementTextValue(fixture, '#caption-label', testedValue);
  });

  it('has route', () => {
    const testedValue = 'route';
    component.route = testedValue;
    testService.checkAttributeExist(fixture, '#button', 'ng-reflect-router-link');
  });

  it('bind route', () => {
    const testedValue = 'route';
    component.route = testedValue;
    testService.checkAttributeValue(fixture, '#button', 'ng-reflect-router-link', testedValue);
  });
});




