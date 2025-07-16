import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente15Formulario } from './componente15-formulario';

describe('Componente15Formulario', () => {
  let component: Componente15Formulario;
  let fixture: ComponentFixture<Componente15Formulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente15Formulario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente15Formulario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
