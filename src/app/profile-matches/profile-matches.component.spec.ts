import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMatchesComponent } from './profile-matches.component';

describe('ProfileMatchesComponent', () => {
  let component: ProfileMatchesComponent;
  let fixture: ComponentFixture<ProfileMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
