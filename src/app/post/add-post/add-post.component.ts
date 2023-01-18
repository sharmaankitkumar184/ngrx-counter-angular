import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
postForm:FormGroup;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.postForm=new FormGroup({
        title:new FormControl(null,[
          Validators.required,
          Validators.minLength(6),
        ]),
        description:new FormControl(null,[
          Validators.required,
          Validators.minLength(6),
        ])
    });
  }
//   showDescriptionErrors(){
//    const descriptionForm=this.postForm.get('description');
//    if(descriptionForm?.touched && descriptionForm.valid)
//    {
//      if(descriptionForm.
//    }
//    Title is Required
//  </div>
//  <div *ngIf="postForm.get('title')?.errors.minlength">
//    Title should be minimum of 6 characters
//  </div>
//   }
  onAddPost(){
    if(!this.postForm.valid)
    {
      return;
    }
    const post:Post={
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    this.store.dispatch(addPost({post}));
  }
}
