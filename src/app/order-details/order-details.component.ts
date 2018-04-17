import { NgModule,  Component,  Pipe,  OnInit} from '@angular/core';
import { ReactiveFormsModule,  FormsModule,  FormGroup,  FormControl,  Validators,  FormBuilder} from '@angular/forms';
import { BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { OrdersService } from '../orders/orders.service';
import { ActivatedRoute } from '@angular/router';
import { OrderDto } from '../dto/OrderDto';
import { Unsubscriber } from '../shared/unsubscriber';
import { OrderStatus } from '../dto/OrderStatus';
import { ConstructionService } from '../shared/construction.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
@Unsubscriber
export class OrderDetailsComponent implements OnInit {
  private orderSubscription: Subscription;
  private constructionSubscription: Subscription;
  public order: OrderDto;
  public statuses: number[];
  // todo zamienić na osobną kontrolkę
  public constructions: string[];
  public filteredConstructions: Observable<string[]>;
  public constructionAutocompleteForm: FormControl = new FormControl();
  constructor(private ordersService: OrdersService, private route: ActivatedRoute, private constructionService: ConstructionService ) {
    this.statuses = Object.keys(OrderStatus).map(k => OrderStatus[k]).filter(v => typeof v === 'number') as number[];
    this.constructionSubscription = constructionService.getConstructions().subscribe(x => this.constructions = x);
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderSubscription = this.ordersService.getOrder(id).subscribe(x => this.order = x);
    this.filteredConstructions = this.constructionAutocompleteForm.valueChanges.pipe(startWith(''), map(val => this.filterConstructions(val)));
  }

  private filterConstructions(val: string): string[] {
    return this.constructions.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
