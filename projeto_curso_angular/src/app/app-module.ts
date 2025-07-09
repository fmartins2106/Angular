import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MeuPrimeiroComponente } from './componente/meu-primeiro-componente/meu-primeiro-componente';
import { Componente02 } from './componente02/componente02';
import { Componente03 } from './componente03/componente03';

@NgModule({
  declarations: [
    App,
    MeuPrimeiroComponente,
    Componente02,
    Componente03
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
