import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente07',
  imports: [CommonModule],
  templateUrl: './componente07.html',
  styleUrl: './componente07.css'
})
export class Componente07 {
  condicao:boolean = false;

  lista:string[] = ['Aprovado','Reprovado','Aprovado'];

}
