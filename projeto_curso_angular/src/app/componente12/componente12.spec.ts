import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente12 } from './componente12';

describe('Componente12', () => {
  let component: Componente12;
  let fixture: ComponentFixture<Componente12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente12);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
