import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroInterestsComponent } from './intro-interests.component';

describe('IntroInterestsComponent', () => {
  let component: IntroInterestsComponent;
  let fixture: ComponentFixture<IntroInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroInterestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
