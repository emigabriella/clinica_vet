import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistroSesionComponent } from './resgistro-sesion.component';

describe('ResgistroSesionComponent', () => {
  let component: ResgistroSesionComponent;
  let fixture: ComponentFixture<ResgistroSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResgistroSesionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgistroSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
