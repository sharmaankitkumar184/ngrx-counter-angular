import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditpostComponent } from "./editpost/editpost.component";
import { PostlistsComponent } from "./postlists/postlists.component";
import { PostReducer } from "./state/post.reducer";

const routes: Routes = [
    {
        path:'',
        component:PostlistsComponent,
        children:[{
            path:'add',
            component:AddPostComponent
          },{
            path:'edit/:id',
            component:EditpostComponent
          },
        ],
    },
    ];
    
    @NgModule({
        declarations:[
            PostlistsComponent,
            AddPostComponent,
            EditpostComponent
    
        ],
      imports: [CommonModule,ReactiveFormsModule,RouterModule.forChild(routes),StoreModule.forFeature('post',PostReducer)],
    })
    export class PostModule { }
    