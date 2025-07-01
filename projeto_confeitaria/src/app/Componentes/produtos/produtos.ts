import { Component, Input } from '@angular/core';
import { ProdutosInterfaces } from '../ProdutosInterfaces';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.html',
  styleUrl: './produtos.css'
})
export class Produtos {
  @Input()
  produtos!: ProdutosInterfaces;
}
