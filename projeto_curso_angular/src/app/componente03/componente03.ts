import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: false,
  templateUrl: './componente03.html',
  styleUrl: './componente03.css'
})
export class Componente03 {

  /* variavel de imagem */
  imagem: string = '../assets/dia.jpg';

  alterarImagem(){
    if(this.imagem === '../assets/dia.jpg'){
      this.imagem = '../assets/noite.jpg'
      return;
    }
    this.imagem = '../assets/dia.jpg'
  }

}
