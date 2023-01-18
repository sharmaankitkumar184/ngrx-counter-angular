import { SHARED_STATE_NAME } from "../store/shared/shared.selector";
import { SharedState } from "../store/shared/shared.state";
import { SharedReducer } from "../store/shared/shared.reducer";
import { AUTH_STATE_NAME } from "../app/auth/state/auth.selector";
import { AuthReducer } from "../app/auth/state/auth.reducer";
import { AuthState } from "../app/auth/state/auth.state";

export interface AppState{
    // counter:CounterState;
    // post:PostState;
    [SHARED_STATE_NAME]:SharedState;
    [AUTH_STATE_NAME]:AuthState;
} 
export const appReducer={
    // counter:counterReducer,
    // post:PostReducer
    [SHARED_STATE_NAME]:SharedReducer,
    [AUTH_STATE_NAME]:AuthReducer,
    
};