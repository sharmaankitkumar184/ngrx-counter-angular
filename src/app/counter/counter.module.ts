import { CommonModule } from "@angular/common";
import {  NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterButtonnsComponent } from "./counter-buttonns/counter-buttonns.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { counterReducer } from "./state/counter.reducer";

const routes: Routes = [
{
    path:'',
    component:CounterComponent
},
];

@NgModule({
    declarations:[
        CounterComponent,
        CounterOutputComponent,
        CounterButtonnsComponent,
        CustomCounterInputComponent,

    ],
  imports: [CommonModule,FormsModule,RouterModule.forChild(routes),StoreModule.forFeature('counter',counterReducer)],
})
export class CounterModule { }
