import { Component } from '@angular/core';

@Component({
  selector: 'app-componente17',
  imports: [],
  templateUrl: './componente17.html',
  styleUrl: './componente17.css'
})
export class Componente17 {
  nome: string = 'Fernando';

  media:number = 0;

  calculo(n1:number,n2:number){
    return(n1+n2)/2;
  }
}
