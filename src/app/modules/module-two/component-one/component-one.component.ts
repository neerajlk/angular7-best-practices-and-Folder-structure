import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   // function to add 2 numbers
   addNumbers = function (param) {
    alert('Sum is = ' + (param.Number1 + param.Number2))
  };
}
