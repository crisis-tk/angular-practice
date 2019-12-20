import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

  person:Person = new Person('tome', 'アクアリウム', 'なんとかなる', '1989年8月1日');

  getPerson(): Observable<Person> {
    return of(this.person);
  }

  constructor() { }
}
