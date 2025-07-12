import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterfaces';

@Component({
  selector: 'app-aluno-lista',
  standalone: false,
  templateUrl:'./aluno-lista.html',
  styleUrl: './aluno-lista.css'
})
export class AlunoLista {
  @Output() excluir: EventEmitter <number> = new EventEmitter();

  @Input() lista: AlunoInterface[] = [];

  @Input() /* configura a variavel aluno para receber informação de um componente externo. */
  aluno!: AlunoInterface;

  exibicao: string = 'Ativo';

   media: number | null = null;
    ngOnInit(): void {
    console.log(this.lista);
    this.media = this.calcularMedia();
  }

// O decorator @Input() permite que o componente "AlunoLista" receba dados do componente pai.
// Neste caso, ele está recebendo uma lista de alunos (`lista`) do tipo AlunoInterface[].
// Isso permite que o componente exiba ou manipule essa lista vinda de fora.
// A inicialização com `[]` evita erros caso nenhum valor seja passado pelo componente pai.

excluirAluno(matricula: number): void {
  this.excluir.emit(matricula);
}
 calcularMedia(): number | null {
    if (!this.aluno.notas || this.aluno.notas.length === 0) {
      return null; // ou retornar 0 ou NaN, dependendo da lógica desejada
    }

    const notasValidas = this.aluno.notas.filter(nota => nota >= 0 && nota <= 10);

    if (notasValidas.length !== this.aluno.notas.length) {
      console.warn('Nota inválida encontrada.');
      return null;
    }

    const soma = notasValidas.reduce((total, nota) => total + nota, 0);
    return soma / notasValidas.length;
  }

  alterarStatus(): void {
    if(this.exibicao == 'Ativo'){
      this.exibicao = 'Inativo';
    } else (this.exibicao == 'Inativo')
      this.exibicao = 'Ativo';
  }
}
