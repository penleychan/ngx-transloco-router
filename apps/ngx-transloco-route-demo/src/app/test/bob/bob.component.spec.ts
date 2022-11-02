import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobComponent } from './bob.component';

describe('BobComponent', () => {
  let component: BobComponent;
  let fixture: ComponentFixture<BobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BobComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
