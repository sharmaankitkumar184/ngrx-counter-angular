import { AuthService } from 'src/app/services/auth.service';
import { exhaustMap, map, catchError, tap, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { autoLogin, autoLogout, loginStart, loginsuccess, signupStart, signupSuccess } from './auth.action';
import { setErrorMessage, setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { User } from 'src/app/models/User.model';


@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,private authService: AuthService,private store:Store,private route:Router)
    {}
    login$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(loginStart),
          exhaustMap((action) => {
            return this.authService.login(action.email, action.password).pipe(
              map((data) => {
                this.store.dispatch(setLoadingSpinner({status:false}));
                this.store.dispatch(setErrorMessage({ message: '' }));
                  const user=this.authService.formatUser(data);
                  this.authService.setUserInLocalStorage(user);
                  return loginsuccess({user});
                  
              }),
              catchError((errResp) => {
                this.store.dispatch(setLoadingSpinner({ status: false }));
                const errorMessage = this.authService.getErrorMessage(
                  errResp.error.error.message
                );
                return of(setErrorMessage({ message: errorMessage }));
              })
            );
            })
        );
    });
    loginRedirect$ = createEffect(
      () => {
        return this.actions$.pipe(
          ofType(...[loginsuccess,signupSuccess]),
          tap((action) => {
            // this.store.dispatch(setErrorMessage({ message: '' }));
           // if (action.redirect) {
              this.route.navigate(['/']);
           // }
          })
        );
      },
      { dispatch: false }
    );
    signUp$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(signupStart),
        exhaustMap((action) => {
          return this.authService.signUp(action.email, action.password).pipe(
            map((data) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              const user = this.authService.formatUser(data);
              this.authService.setUserInLocalStorage(user);
              return signupSuccess({ user, redirect: true });
            }),
            catchError((errResp) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              const errorMessage = this.authService.getErrorMessage(
                errResp.error.error.message
              );
              return of(setErrorMessage({ message: errorMessage }));
            })
          );
        })
      );
    });
    autoLogin$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(autoLogin),
        map((action) => {
          const user = this.authService.getUserFromLocalStorage();
          //return of(loginsuccess({user}));
        })
      );
    },
   { dispatch:false}
    );
  
    logout$ = createEffect(
      () => {
        return this.actions$.pipe(
          ofType(autoLogout),
          map((action) => {
            this.authService.logout();
            this.route.navigate(['auth']);
          })
        );
      },
      { dispatch: false }
    );
  }