import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcherComponent } from './matcher.component';

describe('MatcherComponent', () => {
  let component: MatcherComponent;
  let fixture: ComponentFixture<MatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatcherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
