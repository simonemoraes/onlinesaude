import { Component, OnInit } from '@angular/core';
import {ContatoService} from "./contato.service";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private srvContatoService: ContatoService) { }

  ngOnInit() {
  }

  enviar(formulario, e) {
    e.preventDefault(e)

    console.log(formulario)

      this.srvContatoService.enviarFormulario(formulario).subscribe( resp => console.log(resp))
  }

}
