import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaHCComponent } from './mascota-h-c.component';

describe('MascotaHCComponent', () => {
  let component: MascotaHCComponent;
  let fixture: ComponentFixture<MascotaHCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MascotaHCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotaHCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
