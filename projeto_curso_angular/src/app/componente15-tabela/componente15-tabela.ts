import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente15-tabela',
  imports: [CommonModule],
  templateUrl: './componente15-tabela.html',
  styleUrl: './componente15-tabela.css'
})
export class Componente15Tabela {
    @Input() vetor:string[] =[];
}
