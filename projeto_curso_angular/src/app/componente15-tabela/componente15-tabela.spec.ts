import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente15Tabela } from './componente15-tabela';

describe('Componente15Tabela', () => {
  let component: Componente15Tabela;
  let fixture: ComponentFixture<Componente15Tabela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente15Tabela]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente15Tabela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
