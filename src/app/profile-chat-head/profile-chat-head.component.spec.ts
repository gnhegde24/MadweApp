import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChatHeadComponent } from './profile-chat-head.component';

describe('ProfileChatHeadComponent', () => {
  let component: ProfileChatHeadComponent;
  let fixture: ComponentFixture<ProfileChatHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileChatHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChatHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
