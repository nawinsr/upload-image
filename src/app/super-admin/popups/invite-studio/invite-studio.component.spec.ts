import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteStudioComponent } from './invite-studio.component';

describe('InviteStudioComponent', () => {
  let component: InviteStudioComponent;
  let fixture: ComponentFixture<InviteStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
