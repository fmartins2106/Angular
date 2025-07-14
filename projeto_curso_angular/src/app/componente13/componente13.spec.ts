import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente13 } from './componente13';

describe('Componente13', () => {
  let component: Componente13;
  let fixture: ComponentFixture<Componente13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente13);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
