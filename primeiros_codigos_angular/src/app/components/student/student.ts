import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: false, /* configuração dos modulos juntos */
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  codigo: number = 7;
  Nome: string = "Fernando";
  Curso: string  = "Angular";
}
