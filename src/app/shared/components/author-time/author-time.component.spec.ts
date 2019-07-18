import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorTimeComponent } from './author-time.component';

describe('AuthorTimeComponent', () => {
  let component: AuthorTimeComponent;
  let fixture: ComponentFixture<AuthorTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
