import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { Routes, RouterModule } from '@angular/router';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestHelperService } from './shared/test-helper.service.spec';
import { ScreenDetectorService } from './services/screen-detector.service';
import { ScreenDetectorMock } from './mockServices/screen-detector-mock.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './shared/search.service';
import { SearchServiceMock } from './mockServices/search-mock.service';
describe('AppComponent', () => {
  const routes: Routes = [];
  let testService: TestHelperService<AppComponent>;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,  RouterModule.forRoot(routes), BrowserAnimationsModule ],
      declarations: [AppComponent,  LeftMenuComponent, MenuButtonComponent, SearchComponent],
      providers: [
        { provide: ScreenDetectorService, useClass: ScreenDetectorMock},
        { provide: APP_BASE_HREF, useValue : '/' },
        { provide: SearchService, useClass: SearchServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testService = new TestHelperService(fixture);
  });

 it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

   it(`should have as title 'app'`, async(() => {
    component.title = 'app';
    fixture.detectChanges();
    expect(component.title).toEqual('app');
  }));

  it('exist toolbar', () => {
    testService.checkElementExist('.toolbar');
  });

  it('should render title in a h1 tag', async(() => {
    const testValue = 'app title';
    component.title = testValue;
    fixture.detectChanges();
    testService.checkElementTextValue('.app-name' , testValue);
  }));

  it('exist hamburger button', () => {
    testService.checkElementExist('#button-hamburger');
  });

  it('exist sidenav container', () => {
    testService.checkElementExist('.sidenav-container');
  });

  it('exist left menu', () => {
    testService.checkElementExist('#left-menu');
  });

  it('exist router content', () => {
    testService.checkElementExist('#div-router');
  });
});
