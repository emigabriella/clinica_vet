import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosVComponent } from './servicios-v.component';

describe('ServiciosVComponent', () => {
  let component: ServiciosVComponent;
  let fixture: ComponentFixture<ServiciosVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
