import { Component } from '@angular/core';
import { Person } from './person';
import { PersonDataService } from './person-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  person:Person;

  constructor(private personDataService:PersonDataService) {}

  ngOnInit() {
    this.personDataService.getPerson().subscribe(
      (data) => this.person = data
      );
  }
}
