import { Component, OnInit } from '@angular/core';
import { ScreenDetectorService } from '../services/screen-detector.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private screenDetector: ScreenDetectorService) { }
  isMobile() {
    return this.screenDetector.isMobile();
  }
}
