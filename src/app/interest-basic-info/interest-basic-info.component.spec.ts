import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestBasicInfoComponent } from './interest-basic-info.component';

describe('InterestBasicInfoComponent', () => {
  let component: InterestBasicInfoComponent;
  let fixture: ComponentFixture<InterestBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
