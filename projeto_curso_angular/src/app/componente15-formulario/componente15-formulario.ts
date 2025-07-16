import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente15-formulario',
  imports: [FormsModule],
  templateUrl: './componente15-formulario.html',
  styleUrl: './componente15-formulario.css'
})
export class Componente15Formulario {
  /* vARIÁVEL PARA ARMAZENAR O NOME INFORMADO */
  nome:string = '';

  /* output */
  @Output() funcao = new EventEmitter<string>();

  /* Função de cadastro do componente de formula */
  cadastrarNome() {
    this.funcao.emit(this.nome);
  }
}
