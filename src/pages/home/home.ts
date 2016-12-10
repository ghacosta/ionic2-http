import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PeopleService } from '../../providers/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
	providers: [PeopleService]
})
export class HomePage {
  people: any;
	
  constructor(public peopleService: PeopleService){
		peopleService.getAll().subscribe(
			data => {
				this.people = data.results; 
				console.log(this.people);
			},
			err => {
				console.log(err);
			}
		);
  }
}
