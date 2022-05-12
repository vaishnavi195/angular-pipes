import { Component, VERSION } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { observable, interval } from 'rxjs';

import { map, take } from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  value;
  day = new Date();
  number = 132131231.434;
  obj = [{ name: 'vaishu', age: 25 }];
  arr = [1, 3, 2, 2, 3, 4];
  users = [
    { name: 'vaishnavi', age: 25, Gender: 'F' },
    { name: 'varshitha', age: 25, Gender: 'F' },
    { name: 'teddy', age: 25, Gender: 'M' },
  ];
  adduser(value) {
    this.users.push({ name: value, age: 25, Gender: 'm' });
    console.log(this.users);
  }
  constructor(public http: HttpClient) {}

  jsondata = this.http.get('https://jsonplaceholder.typicode.com/todos/2');

  date$ = interval(1000).pipe(
    map((x) => new Date()),
    take(10)
  );
}
