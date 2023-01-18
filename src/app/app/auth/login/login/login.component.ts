import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/User.model';
import { AppState } from 'src/app/state/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { loginStart, loginsuccess } from '../../state/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private store:Store<AppState>) { }
  user:User;
  ngOnInit(): void {
    this.loginForm=new FormGroup({
        email:new FormControl(null,[
          Validators.required,
          Validators.email,
        ]),
        password:new FormControl(null,[
          Validators.required,
        ])
    });
  }
  onLogin(){
    const email=this.loginForm.value.email;
    const password=this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({status:true}));
    this.store.dispatch(loginStart({email,password})); 
    console.log(this.loginForm.value)
  }
}
