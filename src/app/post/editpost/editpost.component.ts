import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/state/app.state';
import { updatePost } from '../state/post.action';
import { getbyid} from '../state/post.selector';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit,OnDestroy {
  postForm:FormGroup;
  post:Post;
  postsubscription:Subscription;
  constructor(private route:ActivatedRoute,private store:Store<AppState>,private router:Router) { }

  ngOnInit(): void {
  
      this.route.paramMap.subscribe((param)=>{
        const id=param.get('id');
        this.store.select(getbyid,{id}).subscribe((data)=>
        {
          this.post=data;
          console.log(this.post);
          this.createForm();

        })
      })
  }
  createForm(){
    this.postForm=new FormGroup({
      title:new FormControl(this.post.title,[
        Validators.required,
        Validators.minLength(6),
      ]),
      description:new FormControl(this.post.description,[
        Validators.required,
        Validators.minLength(6),
      ])
  });
  }
  onSubmit(){
    if(!this.postForm.valid)
    {
      return;
    }
    const post:Post={
      id:this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    this.store.dispatch(updatePost({post}));
    this.router.navigate(['post']);
  }
  ngOnDestroy(): void {
if(this.postsubscription)
{
  this.postsubscription.unsubscribe();
}
  }
  
}
