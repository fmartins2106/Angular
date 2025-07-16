import { Component } from '@angular/core';
import { Componente15Formulario } from "../componente15-formulario/componente15-formulario";
import { Componente15Tabela } from "../componente15-tabela/componente15-tabela";

@Component({
  selector: 'app-componente15',
  imports: [Componente15Formulario, Componente15Tabela],
  templateUrl: './componente15.html',
  styleUrl: './componente15.css'
})
export class Componente15 {
    /* Vetor de nomes */
    nomes:string[] = ['Maria','Fernando','Joana','José'];

    /* Função de cadastro. */
    cadastrar(nome:string){
      this.nomes.push(nome);
    }
}
