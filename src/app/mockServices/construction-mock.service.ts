import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

export const CONSTRUCTIONS: string[] = [
'Budowa 1',
'Budowa 2',
'Budowa 3',
'Budowa 4',
'Budowa 5',
'Budowa 6',
'Budowa 7',
'Budowa 8',
'Budowa 9',
'Budowa 10',
'Budowa 11',
];

  export class ConstructionServiceMock {
    getConstructions(): Observable<string[]> {
      return of(CONSTRUCTIONS);
    }
  }
