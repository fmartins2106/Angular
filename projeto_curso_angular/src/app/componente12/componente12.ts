import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media-pipe";

@Component({
  selector: 'app-componente12',
  imports: [CommonModule, MediaPipe], /* Para chamar o pipes nativos do Angular */
  templateUrl: './componente12.html',
  styleUrl: './componente12.css'
})
export class Componente12 {
  nome:string = 'Fernando'
  obj:any = {'Nome':'Fernando','idade':22}

  /* vetor de objetos */
alunos:any = [
{'nome': 'Ana'      ,'nota1':8, 'nota2':9},
{'nome': 'Julio'    ,'nota1':7, 'nota2':8},
{'nome': 'Letícia'  ,'nota1':3, 'nota2':2},
{'nome': 'Ricardo'  ,'nota1':7, 'nota2':7}
];

}
