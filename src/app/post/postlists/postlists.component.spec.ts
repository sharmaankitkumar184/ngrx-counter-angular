import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlistsComponent } from './postlists.component';

describe('PostlistsComponent', () => {
  let component: PostlistsComponent;
  let fixture: ComponentFixture<PostlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostlistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
