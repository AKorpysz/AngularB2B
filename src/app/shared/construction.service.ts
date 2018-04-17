import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConstructionServiceMock } from '../mockServices/construction-mock.service';

@Injectable()
export class ConstructionService {

  constructor(private dataService: ConstructionServiceMock) { }

  getConstructions(): Observable<string[]> {
    return this.dataService.getConstructions();
  }
}
