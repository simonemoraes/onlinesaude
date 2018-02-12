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

  @Input() mensagemEnviada: any

  public mostraMensagem: boolean;

  constructor(private srvContatoService: ContatoService) { }

  ngOnInit() {
  }

  public validaMensagem(campo){

    if(campo != null){
      if(!campo.valid && (campo.dirty || campo.touched)){
        this.mostraMensagem = !campo.valid && (campo.dirty || campo.touched)
      }

      if(campo.valid && (campo.dirty || campo.touched)){
        this.mostraMensagem = false
      }
    }
  }

  validaCssInput(campo){
    if(!campo.valid && (campo.dirty || campo.touched)){
      return !campo.valid && (campo.dirty || campo.touched)
    }else{
      return campo.valid && (campo.dirty || campo.touched)
    }
  }

  validaIconeInput(campo){
    if(!campo.valid && (campo.dirty || campo.touched)){
      return {
        'glyphicon glyphicon-asterisk form-control-feedback': this.validaCssInput(campo)
      }
    }else{
      return {
        'glyphicon glyphicon-ok form-control-feedback': this.validaCssInput(campo)
      }
    }
  }

  aplicaCssErro(campo){

    if(!campo.valid && (campo.dirty || campo.touched)){
      return {
        'has-error': this.validaCssInput(campo)
      }
    }else{
      return {
        'has-success': this.validaCssInput(campo)
      }
    }
  }

  enviar(formulario) {
    let f = JSON.stringify(formulario.value)

    this.srvContatoService.enviarFormulario(f).subscribe( resp => {
      this.mensagemEnviada = resp
      this.contato = new ContatoModel()

      formulario.reset()
    })
  }

}
