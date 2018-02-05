import {Component, Input, OnInit} from '@angular/core';
import {ContatoService} from './contato.service';
import {ContatoModel} from '../model/contato.model';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

    public inptutEstaValido: boolean = true
    contato = new ContatoModel();

    public nomeDocampo: string = '';

  constructor(private srvContatoService: ContatoService) { }

  ngOnInit() {
      // this.contato = new ContatoModel();
  }

  validarCampo(campo){
    this.inptutEstaValido = campo.input.valid
    this.nomeDocampo = campo.input.name
  }


  enviar(formulario) {
   // e.preventDefault(e)
      // console.log(formulario)

      let f = JSON.stringify(formulario)

      this.srvContatoService.enviarFormulario(f).subscribe( resp => {
          console.log(resp)

      })
  }

}
