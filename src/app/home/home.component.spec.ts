import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@homework/shared';
import { CoreModule } from '@homework/core';

import { FeedComponent } from './feed/feed.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule],
      declarations: [HomeComponent, FeedCardComponent, FeedComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
