import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";
export const AUTH_STATE_NAME='auth';
const getAuthstate=createFeatureSelector<AuthState>(AUTH_STATE_NAME);
export const isAuthenticated=createSelector(getAuthstate,(state)=>
{
    return state.user ?true :false;
});