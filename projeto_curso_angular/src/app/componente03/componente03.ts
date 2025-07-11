import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  imports: [],
  templateUrl: './componente03.html',
  styleUrl: './componente03.css'
})
export class Componente03 {

  imagem: string = '../assets/dia.jpg'

  alterarImage(){
    if(this.imagem === '../assets/dia.jpg'){
      this.imagem = '../assets/noite.jpg';
    } else {
       this.imagem = '../assets/dia.jpg';
    }
  }

}
