import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButtonnsComponent } from './counter-buttonns.component';

describe('CounterButtonnsComponent', () => {
  let component: CounterButtonnsComponent;
  let fixture: ComponentFixture<CounterButtonnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButtonnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterButtonnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
