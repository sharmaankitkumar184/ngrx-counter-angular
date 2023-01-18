import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  // counter:number=0;
  ngOnInit(): void {
  }
//   onIncrement(){
// this.counter++;
//   }
//   onDecrement(){
// this.counter--;
//   }
//   onReset(){
//     this.counter=0;
//   }
}
