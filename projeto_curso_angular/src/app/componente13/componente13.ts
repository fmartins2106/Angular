import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente13',
  imports: [CommonModule, ReactiveFormsModule], /* para usar ngFor, para formulario reativo */
  templateUrl: './componente13.html',
  styleUrl: './componente13.css'
})
export class Componente13 {
    /* Vetor para produtos */
    vetor:Produto[] = [];

  /*Visibilidade dos botões  */
  btnCadastrar:Boolean = true;

   /* Objeto dew formulário */
   formulario = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(''),
      valor: new FormControl(null)
   });


 /* Inicialização do componente */
    ngOnInit(){
      this.selecionar();
    }

    /* Constrututor */
    constructor(private servico:ProdutoService){}

    /* Método para selecionar todos os produtos */
    selecionar(){
      this.servico. selecionar().subscribe(retorno => {this.vetor = retorno});
    }

    /* Método para cadastrar produto */
    cadastrar(){
      this.servico.cadastrar(this.formulario.value as Produto)
      .subscribe(retorno =>{
        this.vetor.push(retorno);
        this.formulario.reset();
      });
    }

    /* Método para selecionar produto específico */
    selecionarProduto(indice:number){
      this.formulario.setValue({
        id: this.vetor[indice].id,
        nome: this.vetor[indice].nome,
        valor: this.vetor[indice].valor
      });
      this.btnCadastrar = false;
    }

    alterar(){
      this.servico.alterar(this.formulario.value as Produto)
      .subscribe(retorno =>{

        /* Obter o índice do objeto alterado. */
        let indiceAlterado = this.vetor.findIndex(obj => {
          return this.formulario.value.id === obj.id;
        });
        /* Alterar o vetor */
        this.vetor[indiceAlterado] = retorno;

        /* Limpar formulário */
        this.formulario.reset();

        /* Visibilidade dos botões */
        this.btnCadastrar = true;
      });
    }

    /* Método para remover produtos */
  remover(){
    this.servico.remover(this.formulario.value.id)
    .subscribe(() =>{
      /* Obter o índice do vetor que será removido */
      let indiceRemovido = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id;
      })
      /* Remover objeto do vetor */
      this.vetor.splice(indiceRemovido,1);
      /* Limpar o formulario */
      this.formulario.reset();

      /* Visibilidade dos botões */
      this.btnCadastrar = true;
    })
  }



}
