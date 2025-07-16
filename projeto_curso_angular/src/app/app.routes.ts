import { Routes } from '@angular/router';
import { Pagina1 } from './paginas/pagina1/pagina1';
import { Pagina2 } from './paginas/pagina2/pagina2';
import { PaginaErro } from './paginas/pagina-erro/pagina-erro';

export const routes: Routes = [
  {path:'pagina1',component:Pagina1},
  {path:'pagina2',component:Pagina2},
  {path:'',redirectTo:'/pagina1',pathMatch:'full'},
  {path:'',redirectTo:'/pagina2',pathMatch:'full'},
  {path:'**',component:PaginaErro}
];
