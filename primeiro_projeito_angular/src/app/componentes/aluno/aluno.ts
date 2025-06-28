import { Component } from '@angular/core';

@Component({
  selector: 'app-aluno',
  standalone: false,
  templateUrl: './aluno.html',
  styleUrl: './aluno.css'
})
export class Aluno {
  aluno: any = { /* De qualquer tipo */
    nome: "Fernando Martins",
    matricula: 11111,
    email: "fernandom.adm@gmail.com"
  }
}
