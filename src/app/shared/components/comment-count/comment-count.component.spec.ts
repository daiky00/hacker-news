import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCountComponent } from './comment-count.component';

describe('CommentCountComponent', () => {
  let component: CommentCountComponent;
  let fixture: ComponentFixture<CommentCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
