import { Injectable } from '@angular/core';
import { AlunoInterface } from '../interfaces/AlunoInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AlunoServico {

  listaAluno: AlunoInterface[] = [
      {
        matricula: 0,
        nome: 'Fernando Martins',
        email: 'fernando.adm@gmail.com',
        cadastro: false,
        cursos: ["SuperDev Java Full stack"],
        imagemUrl:'assets/images/usuario.png',
        notas: [3,5,2,6],
        status:true
      },
      {
        matricula: 1,
        nome: 'Maria da Silva',
        email: 'maria@gmail.com',
        cadastro: true,
        cursos: ["AdasDev"],
        imagemUrl:'assets/images/usuario3.png',
        notas: [5,10,10],
        status:true
      },
      {
        matricula: 2,
        nome: 'Marta Amaral',
        email: 'marta@gmail.com',
        cadastro: false,
        cursos: ["AdasDev"],
        imagemUrl:'assets/images/usuario4.png',
        notas: [2,5,5,2],
        status:true
      },
      {
        matricula: 3,
        nome: 'João da Silva',
        email: 'joao@gmail.com',
        cadastro: true,
        cursos: ["C#, SQLServer"],
        imagemUrl:'assets/images/usuario2.png',
        notas: [10,5,10,6],
        status:true
      }
    ];
  constructor() { }

  getListaAlunos(): AlunoInterface[] {
    return this.listaAluno;
  }
  
}
