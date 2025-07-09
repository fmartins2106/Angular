import { Component } from '@angular/core';

@Component({
  selector: 'app-componente02',
  standalone: false,
  templateUrl: './componente02.html',
  styleUrl: './componente02.css'
})
export class Componente02 {
  /* função para exibir uma mensagem */
    mensagem(){
    alert("Hello World")
  }


}
