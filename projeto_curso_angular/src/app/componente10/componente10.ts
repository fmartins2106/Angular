import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente10',
  imports: [ReactiveFormsModule],
  templateUrl: './componente10.html',
  styleUrl: './componente10.css'
})
export class Componente10 {
  formulario = new FormGroup({
    nome: new FormControl(''),
    cidade: new FormControl('')
  });

}
