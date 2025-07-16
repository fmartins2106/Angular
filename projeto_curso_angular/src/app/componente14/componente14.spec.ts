import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente14 } from './componente14';

describe('Componente14', () => {
  let component: Componente14;
  let fixture: ComponentFixture<Componente14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente14]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente14);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
