import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  imports: [CommonModule], /* CommonModule libera varias funções do Angular como o *ngIf */
  templateUrl: './componente04.html',
  styleUrl: './componente04.css'
})
export class Componente04 {
  exibir:boolean = false;

  exibirDiv() {
    if(this.exibir === true){
      this.exibir = false;
    }else{
      this.exibir = true;
    }
  }


}
