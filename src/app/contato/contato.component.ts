import { Component, OnInit } from '@angular/core';
import {ContatoService} from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public mensagem: string;

  constructor(private srvContatoService: ContatoService) { }

  ngOnInit() {
  }

  enviar(formulario, e) {
    e.preventDefault(e)

      let f = JSON.stringify(formulario)

      this.srvContatoService.enviarFormulario(f).subscribe( resp => {console.log(resp)})
  }

}
