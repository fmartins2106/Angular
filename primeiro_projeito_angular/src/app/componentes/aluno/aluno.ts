import { Component, Input, input } from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterfaces';

@Component({
  selector: 'app-aluno',
  standalone: false,
  templateUrl: './aluno.html',
  styleUrl: './aluno.css'
})
export class Aluno {
  @Input() /* configura a variavel aluno para receber informação de um componente externo. */
  aluno!: AlunoInterface;
}
