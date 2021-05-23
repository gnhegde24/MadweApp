import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoQuestionsComponent } from './into-questions.component';

describe('IntoQuestionsComponent', () => {
  let component: IntoQuestionsComponent;
  let fixture: ComponentFixture<IntoQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntoQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
