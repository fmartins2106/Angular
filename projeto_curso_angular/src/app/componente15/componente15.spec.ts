import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente15 } from './componente15';

describe('Componente15', () => {
  let component: Componente15;
  let fixture: ComponentFixture<Componente15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente15]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente15);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
