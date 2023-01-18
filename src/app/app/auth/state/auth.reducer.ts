import { createReducer,on } from "@ngrx/store";
import { initialState } from "src/app/counter/state/counter.state";
import { autoLogout, loginsuccess, signupSuccess } from "./auth.action";


const _authReducer=createReducer(initialState,
    on(
        loginsuccess,(state,action)=>{
            return{
                ...state,
                user:action.user,
            };
        }),
        on(
            signupSuccess,(state,action)=>{
                return{
                    ...state,
                    user:action.user,
                };
            }),
            on(
                autoLogout,(state)=>{
                    return{
                        ...state,
                        user:null,
                    };
                })
);
export function AuthReducer(state:any,action:any)
{
    return _authReducer;
}
