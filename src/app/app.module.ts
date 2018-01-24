import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
