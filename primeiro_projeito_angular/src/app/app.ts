import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterfaces';
import { AlunoLista } from './componentes/aluno-lista/aluno-lista';
import { notStrictEqual } from 'node:assert';
import { Aluno } from './componentes/aluno/aluno';
import { AlunoServico } from './servicos/aluno-servico';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})


export class App {
  protected title = 'primeiro_projeito_angular';

  exibicao: string = 'lista';

  tipoFiltro: 'todos' | 'aprovados' | 'reprovados' = 'todos';

    // ✅ Constructor está no lugar certo agora
  constructor(private servico: AlunoServico) {

  }

  listaAluno!:AlunoInterface[];
  listaFiltro!: AlunoInterface[];

  ngOnInit(): void {

  /*   this.listaAluno.forEach(aluno => {
      const soma = aluno.notas.reduce((total, nota) => total + nota, 0);
      const media = soma / aluno.notas.length;
      aluno.media = Number(media.toFixed(2));
      this.listaAluno = this.servico.getListaAlunos();
    }); */
   /*  this.listaFiltro = [...this.listaAluno]; // carregar todos inicialmente */
    this.listaFiltro = this.servico.getListaAlunos();
  }




  alterarExibicao() : void {
    if(this.exibicao == 'cards'){
      this.exibicao = 'lista';
    } else if (this.exibicao == 'lista'){
      this.exibicao = 'cards';
    } else if(this.exibicao === 'aprovados'){
      this.exibicao = 'aprovados';
    }
  }


filtrarAluno(tipo: 'aprovados' | 'reprovados' | 'todos'): void {
  this.tipoFiltro = tipo;

  if (tipo === 'aprovados') {
    this.listaFiltro = this.listaAluno.filter(a => a.cadastro === true);
  } else if (tipo === 'reprovados') {
    this.listaFiltro = this.listaAluno.filter(a => a.cadastro === false);
  } else {
    this.listaFiltro = this.listaAluno;
  }
}

onExcluir(matricula: number): void {
  this.listaAluno.forEach((aluno,index) =>{
    if (aluno.matricula === matricula){
        this.listaAluno.splice(index,1);
    }else {
        console.log(`Matrícula ${matricula} não encontrado.`);
    }
  });

}

/*
Percorrer a lista de alunos
encontrar o aluno com a matricula igual a do parametro recebido
remover o aluno da lista.--- lista.splice(index,quantidadeRemovida)
 */






}
