import { Post } from "src/app/models/post.model";

export interface PostState{
    posts:Post[];
}

export const initialState:PostState={
    posts:[
        {
         id:'1',title:'Sample Title1',description:'sample description 1'
        },
        {
            id:'2',title:'Sample Title2',description:'sample description 2'
           },
           {
            id:'3',title:'Sample Title3',description:'sample description 3'
           },
    ],
     
};