import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";

const getPostState=createFeatureSelector<PostState>("post");

export const getpost =createSelector(getPostState,(state)=>{
    return state.posts;
});
export const getbyid =createSelector(getPostState,(state:any,props:any)=>{
    return state.posts.find((post: { id: any; })=>post.id===props.id)
});