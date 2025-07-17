import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01 } from "./componente01/componente01";
import { Componente02 } from "./componente02/componente02";
import { Componente03 } from "./componente03/componente03";
import { Componente04 } from "./componente04/componente04";
import { Componente05 } from "./componente05/componente05";
import { Componente06 } from "./componente06/componente06";
import { Componente07 } from "./componente07/componente07";
import { Componente08 } from "./componente08/componente08";
import { Componente09 } from "./componente09/componente09";
import { Componente10 } from "./componente10/componente10";
import { Componente11 } from "./componente11/componente11";
import { Componente12 } from "./componente12/componente12";
import { Componente13 } from "./componente13/componente13";
import { Componente14 } from "./componente14/componente14";
import { Componente15 } from "./componente15/componente15";
import { Componente16 } from "./componente16/componente16";
import { Componente17 } from "./componente17/componente17";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente01, Componente02, Componente03, Componente04, Componente05, Componente06, Componente07, Componente08, Componente09, Componente10, Componente11, Componente12, Componente13, Componente14, Componente15, Componente16, Componente17],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Projeto_Curso_Angular';
}
