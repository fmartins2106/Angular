import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Aluno } from './componentes/aluno/aluno';
import { AlunoLista } from './componentes/aluno-lista/aluno-lista';
import { AlunoForm } from './componentes/aluno-form/aluno-form';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Aluno,
    AlunoLista,
    AlunoForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
