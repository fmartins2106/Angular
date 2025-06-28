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

  listaALuno: AlunoInterface[] = [
    {
      matricula: 0,
      nome: 'Fernando Martins',
      email: 'fernando.adm@gmail.com',
      cadastro: false,
      cursos: ["SuperDev Java Full stack"]
    },
    {
      matricula: 1,
      nome: 'Maria da Silva',
      email: 'maria@gmail.com',
      cadastro: false,
      cursos: ["AdasDev"]
    }
  ]
}


