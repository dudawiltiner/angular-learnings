import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@NgModule({ // decorator NgModule para representar um módulo
  declarations: [ // metadado que reunimos componentes, diretivas e pipes
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [ // outros módulos que queremos usar nesse módulo
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [], // os serviços que vão ficar disponíveis nos componentes que estão nesse módulo
  bootstrap: [AppComponent] // apena no módulo de raiz, determina qual o componente que vai ser rendirizado quando iniciarmos a aplicação
})
export class AppModule { }
