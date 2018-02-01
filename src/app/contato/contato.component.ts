import {Component, Input, OnInit} from '@angular/core';
import {ContatoService} from './contato.service';
import {ContatoModel} from '../model/contato.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

    contato = new ContatoModel();
    validaCampo: boolean = true;
    campoInforme: string = 'Campo com * é obrigatório.';

  constructor(private srvContatoService: ContatoService) { }

  ngOnInit() {
      // this.contato = new ContatoModel();
  }

  enviar(formulario) {
   // e.preventDefault(e)
      console.log(formulario)

      if(formulario.valid == false){
          this.validaCampo = formulario.valid;
          this.campoInforme;
          // console.log(this.campoInforme)
      }else{
          this.campoInforme = '';
          this.validaCampo
      }

      console.log(formulario.valid)

      // let f = JSON.stringify(formulario)

      // this.srvContatoService.enviarFormulario(this.contato).subscribe( resp => {console.log(resp)})
  }

}
