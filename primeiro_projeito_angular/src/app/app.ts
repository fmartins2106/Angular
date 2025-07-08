import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterfaces';
import { AlunoLista } from './componentes/aluno-lista/aluno-lista';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'primeiro_projeito_angular';

  exibicao: string = 'cards';

  listaFiltro: AlunoInterface[] = [];

  listaAluno: AlunoInterface[] = [
    {
      matricula: 0,
      nome: 'Fernando Martins',
      email: 'fernando.adm@gmail.com',
      cadastro: false,
      cursos: ["SuperDev Java Full stack"],
      imagemUrl:'assets/images/usuario.png',
      notas: [10,5,10,6]
    },
    {
      matricula: 1,
      nome: 'Maria da Silva',
      email: 'maria@gmail.com',
      cadastro: true,
      cursos: ["AdasDev"],
      imagemUrl:'assets/images/usuario3.png',
      notas: [10,5,10,6]
    },
    {
      matricula: 2,
      nome: 'Marta Amaral',
      email: 'marta@gmail.com',
      cadastro: false,
      cursos: ["AdasDev"],
      imagemUrl:'assets/images/usuario4.png',
      notas: [10,5,10,6]
    },
    {
      matricula: 3,
      nome: 'João da Silva',
      email: 'joao@gmail.com',
      cadastro: true,
      cursos: ["C#, SQLServer"],
      imagemUrl:'assets/images/usuario2.png',
      notas: [10,5,10,6],
    }
  ];

  alterarExibicao() : void {
    if(this.exibicao == 'cards'){
      this.exibicao = 'lista';
    } else if (this.exibicao == 'lista'){
      this.exibicao = 'cards';
    } else if(this.exibicao === 'aprovados'){
      this.exibicao = 'aprovados';
    }
  }
  

filtrarAluno(tipo: string): void {
  if (tipo === 'aprovados') {
    this.listaFiltro = this.listaAluno.filter(a => a.cadastro === true);
  } else if (tipo === 'reprovados') {
    this.listaFiltro = this.listaAluno.filter(a => a.cadastro === false);
  } else if (tipo === 'todos') {
    this.listaFiltro = this.listaAluno;
  }

  this.exibicao = 'aprovados';
}


}
