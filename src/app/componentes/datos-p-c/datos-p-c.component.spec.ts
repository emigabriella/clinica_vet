import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPCComponent } from './datos-p-c.component';

describe('DatosPCComponent', () => {
  let component: DatosPCComponent;
  let fixture: ComponentFixture<DatosPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosPCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
