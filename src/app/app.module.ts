import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
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
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { MensagemErroComponent } from './mensagem-erro/mensagem-erro.component';
import { InputContainerComponent } from './shared/input-container/input-container.component';
import { MensagemEnviadaComponent } from './mensagem-enviada/mensagem-enviada.component';
import { ContatoFormularioReativoComponent } from './contato-formulario-reativo/contato-formulario-reativo.component';
import { FormDebugComponent } from './form-debug/form-debug.component';

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
    ProdutosComponent,
    CampoControlErroComponent,
    MensagemErroComponent,
    InputContainerComponent,
    MensagemEnviadaComponent,
    ContatoFormularioReativoComponent,
    FormDebugComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
