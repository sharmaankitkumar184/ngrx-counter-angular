import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { deletePost } from '../state/post.action';
import { getpost } from '../state/post.selector';

@Component({
  selector: 'app-postlists',
  templateUrl: './postlists.component.html',
  styleUrls: ['./postlists.component.css']
})
export class PostlistsComponent implements OnInit {
  
  constructor(private store:Store<AppState>) { }
  posts: Observable<Post[]>;
  ngOnInit(): void {
    this.posts=this.store.select(getpost);
    console.log(this.posts);
  }
  OnDelete(id:string){
    if(confirm("Do You Want To delete"))
    {
      this.store.dispatch(deletePost({id})); 
    }
  }

}
