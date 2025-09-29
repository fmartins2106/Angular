import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../componentes/livro/livro';

@Injectable({
  providedIn: 'root'
})

export class LivroService {
  private API_URL = "http://localhost:3000/livros"

  constructor(private HttpClient: HttpClient) {}


// GET- LISTAR LIVROS
  obterLivros(): Observable<Livro[]>{
    return this.HttpClient.get<Livro[]>(this.API_URL);

  }

}
