import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterfaces';

@Component({
  selector: 'app-aluno-lista',
  standalone: false,
  templateUrl: './aluno-lista.html',
  styleUrl: './aluno-lista.css'
})
export class AlunoLista {
  @Output() excluir: EventEmitter <number> = new EventEmitter();

  @Input() lista: AlunoInterface[] = [];

// O decorator @Input() permite que o componente "AlunoLista" receba dados do componente pai.
// Neste caso, ele está recebendo uma lista de alunos (`lista`) do tipo AlunoInterface[].
// Isso permite que o componente exiba ou manipule essa lista vinda de fora.
// A inicialização com `[]` evita erros caso nenhum valor seja passado pelo componente pai.

excluirAluno(matricula: number): void {
  this.excluir.emit(matricula);
}

}
