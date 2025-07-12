import { AlunoLista } from './../aluno-lista/aluno-lista';
import { Component, Input} from '@angular/core';
import { Interface } from 'readline';
import { AlunoInterface } from '../../interfaces/AlunoInterfaces';

@Component({
  selector: 'app-aluno-form',
  standalone: false,
  templateUrl: './aluno-form.html',
  styleUrl: './aluno-form.css'
})
export class AlunoForm {
  @Input() /* configura a variavel aluno para receber informação de um componente externo. */
  alunoParaEdicao!: AlunoInterface;

  aluno!:AlunoInterface;

}
