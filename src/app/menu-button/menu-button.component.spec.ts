import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuButtonComponent } from './menu-button.component';
import { AppModule } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { MaterialModule } from '../material.module';
import { Routes, RouterModule } from '@angular/router';

describe('MenuButtonComponent', () => {
  let component: MenuButtonComponent;
  let fixture: ComponentFixture<MenuButtonComponent>;

  const routes: Routes = [];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, RouterModule.forRoot(routes) ],
      declarations: [ MenuButtonComponent ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has toolTip', () => {
    const testedValue = 'tip';
    component.tooltip = testedValue;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const uiElement = compiled.querySelector('#tooltip');
    expect(uiElement.hasAttribute('ng-reflect-message')).toEqual(true);
  });

  it('bind toolTip', () => {
    const testedValue = 'tip';
    component.tooltip = 'tip';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const uiElement = compiled.querySelector('#tooltip');
    expect(uiElement.getAttribute('ng-reflect-message')).toMatch(testedValue);
  });

  it('bind icon', () => {
    const testedValue = 'add';
    component.icon = testedValue;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const uiElement = compiled.querySelector('#icon');
    expect(uiElement.textContent).toContain(testedValue);
  });

  it('bind name', () => {
    const testedValue = 'Test';
    component.caption = testedValue;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const uiElement = compiled.querySelector('#caption-label');
    expect(uiElement.textContent).toContain(testedValue);
  });

  it('has route', () => {
    const testedValue = 'route';
    component.route = testedValue;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const uiElement = compiled.querySelector('#button');
    expect(uiElement.hasAttribute('ng-reflect-router-link')).toEqual(true);
  });

  it('bind route', () => {
    const testedValue = 'route';
    component.route = testedValue;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const uiElement = compiled.querySelector('#button');
    expect(uiElement.getAttribute('ng-reflect-router-link')).toEqual(testedValue);
  });
});
