import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttonns',
  templateUrl: './counter-buttonns.component.html',
  styleUrls: ['./counter-buttonns.component.css']
})
export class CounterButtonnsComponent implements OnInit {
// @Output() increment=new EventEmitter<void>();
// @Output() decrement=new EventEmitter<void>();
// @Output() reset=new EventEmitter<void>();

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  onIncrement(){
// this.increment.emit();
this.store.dispatch(increment());
  }
  onDecrement(){
    // this.decrement.emit();
    this.store.dispatch(decrement());
      }
      onReset(){
        // this.reset.emit();
        this.store.dispatch(reset());
          }

}
