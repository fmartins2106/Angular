import { Component } from '@angular/core';
/* Arquivo principal, onde controlamos os componentes */
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,  /*  */
  styleUrl: './app.css'
})
export class App {
  protected title = 'primeiros-cogios-angular';

  titulo: string = "Título da página";
  aluno: string  = "Fernando";

}
