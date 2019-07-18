import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../shared';
import { FeedCardComponent } from '../feed-card/feed-card.component';
import { FeedComponent } from './feed.component';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [FeedComponent, FeedCardComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
