import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpModule} from '@angular/http';
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
import { TestHelperService } from './shared/test-helper.service';


@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    OrdersListComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    OrderDetailsComponent,
    OrderConfirmationComponent,
    MenuButtonComponent
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
  providers: [TestHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
