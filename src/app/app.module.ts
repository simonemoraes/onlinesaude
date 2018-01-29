import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms'
import {HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicoComponent } from './servico/servico.component';
import { NossotimeComponent } from './nossotime/nossotime.component';
import { ContatoComponent } from './contato/contato.component';
import { MapaComponent } from './contato/mapa/mapa.component';
import { RodapeComponent } from './layout/rodape/rodape.component';
import { PlanosComponent } from './planos/planos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import {ContatoService} from "./contato/contato.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SobreComponent,
    ServicoComponent,
    NossotimeComponent,
    ContatoComponent,
    MapaComponent,
    RodapeComponent,
    PlanosComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,

      AppRoutingModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
