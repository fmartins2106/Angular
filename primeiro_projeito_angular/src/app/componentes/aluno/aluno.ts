import { Component, Input } from '@angular/core';
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

  media: number | null = null;
  ngOnInit(): void {
    console.log(this.aluno);
    this.media = this.calcularMedia();
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
  

}
