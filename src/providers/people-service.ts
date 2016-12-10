import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleService {

  constructor(public http: Http) {
    console.log('Hello PeopleService Provider');
  }
	
	getAll() {
		return this.http.get('https://randomuser.me/api/?results=10')
    	.map(res => res.json());
	}
}
