import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcherDetailComponent } from './matcher-detail.component';

describe('MatcherDetailsComponent', () => {
  let component: MatcherDetailComponent;
  let fixture: ComponentFixture<MatcherDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatcherDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatcherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
