import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'primeiro_projeito_angular';

  exibicao: string = 'cards';

  listaAluno: AlunoInterface[] = [
    {
      matricula: 0,
      nome: 'Fernando Martins',
      email: 'fernando.adm@gmail.com',
      cadastro: false,
      cursos: ["SuperDev Java Full stack"],
      imagemUrl:'assets/images/usuario.png'
    },
    {
      matricula: 1,
      nome: 'Maria da Silva',
      email: 'maria@gmail.com',
      cadastro: true,
      cursos: ["AdasDev"],
      imagemUrl:'assets/images/usuario3.png'
    },
    {
      matricula: 2,
      nome: 'Marta Amaral',
      email: 'marta@gmail.com',
      cadastro: false,
      cursos: ["AdasDev"],
      imagemUrl:'assets/images/usuario4.png'
    }
  ]
}


