import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.html',
  styleUrl: './componente11.css'
})
export class Componente11 {

  /* Objeto de formulário */
  formulario = new FormGroup({
    nome  : new FormControl('',[Validators.required, Validators.minLength(3)]),
    idade : new FormControl(null, [Validators.required, Validators.min(0),Validators.max(120)]),
    cidade: new FormControl('',[Validators.required, Validators.minLength(3)])
  });

   /* Visibilidade dos botões */
    btnCadastrar:boolean = true

    /* lista */
    lista: Pessoa[] = [];
    /* Indice inicia em -1 para não selecionar nenhum cadastro da tabela */
    indice: number = -1;

    /* Função de cadastro */
    cadastrar(){
      /* Cadastro vetor */
      this.lista.push(this.formulario.value as Pessoa);
      /* Limpeza dos inputs */
      this.formulario.reset();

      /* Visualização via console */
     /*  console.table(this.lista); */

    }

    /* fUNÇÃO DE SELEÇÃO */
    selecionar(indice:number){
      /* Atribuir o índice da pessoa */
      this.indice = indice;

      /* Atribuir os dados da pessoa no formulário */
      this.formulario.setValue({
        nome: this.lista[indice].nome,
        idade: this.lista[indice].idade,
        cidade: this.lista[indice].cidade
      });
      /* Visibilidade do botões */
      this.btnCadastrar = false;

    }

    /* Função de alterar */
    alterar(){
      /* Alterar vertor */
      this.lista[this.indice] = this.formulario.value as Pessoa;
       /* Limpar os imputs */
      this.formulario.reset();
      /* Visibilidade dos botões */
      this.btnCadastrar = true;

    }

    /* Função de remoção */

    remover(){
      /* Remover pessoa do vetor */
      this.lista.splice(this.indice,1);
      /* Limpeza dos inputs */
      this.formulario.reset();
      /*Visibilidade dos botões  */
      this.btnCadastrar = true;

    }


    /* Função de cancelamento */
    cancelamento(){
      /* Limpeza dos inputs */
      this.formulario.reset();

      /* Visibilidade dos botões */
      this.btnCadastrar = true;

    }

}
