import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { ChangeChannel, CustomIncrement } from '../state/counter.action';
import { getChannelName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
value:number=0;
ChannelName:string='';
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe((ChannelName)=>{
      this.ChannelName=ChannelName;
      console.warn('channelname');
    });
  }
onAdd(){
  this.store.dispatch(CustomIncrement({count:+this.value}));
  // console.warn(this.value);
}
onChangeChannel(){
  this.store.dispatch(ChangeChannel());
}
}
