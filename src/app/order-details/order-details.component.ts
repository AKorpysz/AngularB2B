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
import * as XLSX from 'ts-xlsx';
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
  private fileToUpload: File = null;
  arrayBuffer: any;
  public fileData: any;
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

  public loadData() {

  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
    this.Upload();
}

Upload() {
  const fileReader = new FileReader();
    fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        const data = new Uint8Array(this.arrayBuffer);
        const arr = new Array();
        for (let i = 0; i !== data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
        const bstr = arr.join('');
        const workbook = XLSX.read(bstr, {type: 'binary'});
        const first_sheet_name = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[first_sheet_name];
        const jsonObj = XLSX.utils.sheet_to_json(worksheet, {raw: true});
        console.log(jsonObj);
        this.fileData = jsonObj;
    };
    fileReader.readAsArrayBuffer(this.fileToUpload);
}

}
