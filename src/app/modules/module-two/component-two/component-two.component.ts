import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  // function to subtract 2 numbers
 subtractNumbers = function (param) {
  alert('Difference is = ' + (param.Number1 - param.Number2))
};
}
