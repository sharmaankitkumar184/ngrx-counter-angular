import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
{
path:'counter',
loadChildren:()=>
import ('./counter/counter.module').then((m)=>m.CounterModule),
},
{
path:'post',
loadChildren:()=>
import ('./post/post.module').then((m)=>m.PostModule),
},
{
  path:'auth',
  loadChildren:()=>
  import ('./app/auth/auth.module').then((m)=>m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
