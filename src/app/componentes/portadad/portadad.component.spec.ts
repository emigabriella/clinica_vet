import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadadComponent } from './portadad.component';

describe('PortadadComponent', () => {
  let component: PortadadComponent;
  let fixture: ComponentFixture<PortadadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortadadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
