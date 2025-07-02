import { Component, Input } from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterfaces';

@Component({
  selector: 'app-aluno-lista',
  standalone: false,
  templateUrl: './aluno-lista.html',
  styleUrl: './aluno-lista.css'
})
export class AlunoLista {
  @Input() lista: AlunoInterface[] = [];
}
