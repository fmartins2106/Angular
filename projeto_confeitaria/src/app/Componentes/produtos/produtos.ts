import { Component, Input } from '@angular/core';
import { ProdutosInterfaces } from '../ProdutosInterfaces';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.html',
  styleUrl: './produtos.css'
})
export class Produtos {
  @Input() produtos!: ProdutosInterfaces;

  pizza = {
    codigo:"",
    nome:"",
    descricao:"",
    preco:0,
    tamanhosDisponiveis:[] as string[],
    imagemURL:""
  };

  tamanhos = ["Pequeno","Média","Grande","Gigante"];
  tamanhoSelecionado: string[] = [];
  toggleTamanho(tamanho:string,event: any){
    if(event.target.checked){
      this.tamanhoSelecionado.push(tamanho);
      return;
    }
    this.tamanhoSelecionado = this.tamanhoSelecionado.filter(t => t !== tamanho);
  }

  imagemPreview: string | ArrayBuffer | null = null;
  imagemSelecionada: File | null = null;

  onFileSelected(event: any){
    const file = event.target.file[0];
    if(file){
      this.imagemSelecionada = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }





}
