import { Component, Input } from '@angular/core';
import { ScreenDetectorService } from '../services/screen-detector.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent  {
  constructor(private screenDetector: ScreenDetectorService) { }
  isMobile() {
    return this.screenDetector.isMobile();
  }
}
