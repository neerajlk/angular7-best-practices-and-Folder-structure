import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment'

console.log(environment)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Angular 7 Main Component'
  constructor() {
  }

  ngOnInit() { }
  env = environment
  appLoader = true
}





