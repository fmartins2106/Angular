import { TestBed } from '@angular/core/testing';
import { Componente17 } from './componente17';

describe('Testando componente 17', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente17]
    }).compileComponents();
  });

  it('Validar variável nome', () => {
    const fixture = TestBed.createComponent(Componente17);
    const componente = fixture.componentInstance;
    expect(componente.nome).toEqual('Fernando');
  });

  it('Validar o valor inicial da variável média', () => {
    const fixture = TestBed.createComponent(Componente17);
    const componente = fixture.componentInstance;
    expect(componente.media).toEqual(0);
  });

  it('Validar o método de cálculo', () => {
    const fixture = TestBed.createComponent(Componente17);
    const componente = fixture.componentInstance;
    const retorno = componente.calculo(10, 8);
    expect(retorno).toEqual(9);
  });

  it('Variável e função', () => {
    const fixture = TestBed.createComponent(Componente17);
    const componente = fixture.componentInstance;
    expect(componente.media).toEqual(0);
    const retorno = componente.calculo(5, 9);
    componente.media = retorno;
    expect(componente.media).toEqual(7);
  });
});
