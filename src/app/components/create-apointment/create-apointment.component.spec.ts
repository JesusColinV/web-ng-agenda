import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApointmentComponent } from './create-apointment.component';

describe('CreateApointmentComponent', () => {
  let component: CreateApointmentComponent;
  let fixture: ComponentFixture<CreateApointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateApointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
