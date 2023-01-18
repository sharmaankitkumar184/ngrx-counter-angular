import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterReducer } from '../state/counter.reducer';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit,OnDestroy {
  counter:number=0;
 CounterSubscription: Subscription = new Subscription;
//  counter$: Observable<{ counter: number }>;
  constructor(private store:Store<{counter:CounterState}>) { }
//  @Input() counter:number=0;
 
  ngOnInit(): void {
    
    this.CounterSubscription=this.store.select(getCounter).subscribe(counter=>{
      this.counter=counter;
      console.warn('counter hit');
    });
    //  this.counter$=this.store.select('counter');
  }
  ngOnDestroy():void{
    if(this.CounterSubscription)
    {
      this.CounterSubscription.unsubscribe();
    }
  }

}
