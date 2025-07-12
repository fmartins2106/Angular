import { TestBed } from '@angular/core/testing';

import { AlunoServico } from './aluno-servico';

describe('AlunoServico', () => {
  let service: AlunoServico;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoServico);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
