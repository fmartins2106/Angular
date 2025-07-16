import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaErro } from './pagina-erro';

describe('PaginaErro', () => {
  let component: PaginaErro;
  let fixture: ComponentFixture<PaginaErro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaErro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaErro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
