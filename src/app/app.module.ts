import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import 'hammerjs';
import { ScreenDetectorService } from './services/screen-detector.service';
import { OrdersComponent } from './orders/orders.component';
import { OrdersListMobileComponent } from './orders-list-mobile/orders-list-mobile.component';
import { OrdersService } from './orders/orders.service';
import { OrdersServiceMock } from './mockServices/orders-mock.service';
import { TempComponent } from './temp/temp.component';
import { SearchService } from './shared/search.service';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    OrdersListComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    OrderDetailsComponent,
    OrderConfirmationComponent,
    MenuButtonComponent,
    OrdersComponent,
    OrdersListMobileComponent,
    SearchComponent,
    TempComponent
  ],
  exports: [
   MaterialModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [
    ScreenDetectorService,
    OrdersService,
    OrdersServiceMock,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
