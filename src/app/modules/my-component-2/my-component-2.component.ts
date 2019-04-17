import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component-2',
  templateUrl: './my-component-2.component.html',
  styleUrls: ['./my-component-2.component.css']
})
export class MyComponent2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // function to add 2 numbers
  addNumbers = function (x, y) {
    alert(x + y)
  };
}
