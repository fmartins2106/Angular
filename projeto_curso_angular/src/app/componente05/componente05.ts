import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente05',
  imports: [CommonModule],
  templateUrl: './componente05.html',
  styleUrl: './componente05.css'
})
export class Componente05 {
  nomes:string[] = ['Fernando','Maria','Ana','José']
}
