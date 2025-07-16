import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente16 } from './componente16';

describe('Componente16', () => {
  let component: Componente16;
  let fixture: ComponentFixture<Componente16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente16]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente16);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
