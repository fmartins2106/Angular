import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroComponente } from './meu-primeiro-componente';

describe('MeuPrimeiroComponente', () => {
  let component: MeuPrimeiroComponente;
  let fixture: ComponentFixture<MeuPrimeiroComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeuPrimeiroComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuPrimeiroComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
