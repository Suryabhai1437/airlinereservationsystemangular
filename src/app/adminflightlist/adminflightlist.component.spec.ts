import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminflightlistComponent } from './adminflightlist.component';

describe('AdminflightlistComponent', () => {
  let component: AdminflightlistComponent;
  let fixture: ComponentFixture<AdminflightlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminflightlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminflightlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
