import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminflightComponent } from './adminflight.component';

describe('AdminflightComponent', () => {
  let component: AdminflightComponent;
  let fixture: ComponentFixture<AdminflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
