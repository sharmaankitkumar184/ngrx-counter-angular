import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post.model";

export const ADD_POST_ACTION='[posts page] add post';
export const ADD_UPDATE_ACTION='[posts page] add post';
export const ADD_DELETE_ACTION='[posts page] add post';
export const addPost=createAction(ADD_POST_ACTION,props<{post:Post}>());
export const updatePost=createAction(ADD_POST_ACTION,props<{post:Post}>());
export const deletePost=createAction(ADD_POST_ACTION,props<{id:string}>());
