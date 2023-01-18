import { createReducer, on, State, Store } from "@ngrx/store";
import { ChangeChannel, CustomIncrement, decrement, increment, reset } from "./counter.action";
import { initialState } from "./counter.state";

export const _counterReducer=createReducer(initialState,on(
    increment,(state)=>{
        return{
            ...state,
            counter:state.counter+1,
        };
    }
),on(
    decrement,(state)=>{
        return{
            ...state,
            counter:state.counter-1,
        };
    }),
    on(
        reset,(state)=>{
            return{
                ...state,
                counter:0,
            };
        }),
        on(
            CustomIncrement,(state,action)=>{
                return{
                    ...state,
                    counter:state.counter+action.count,
                };
            }), 
            on(
                ChangeChannel,(state) =>{
                    return{
                        ...state,
                        ChannelName:'changged channelname',
                    };
                })
);

export function counterReducer(state:any,action:any){
return _counterReducer(state,action);
}