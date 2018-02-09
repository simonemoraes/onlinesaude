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
  @Input() campoInvalido: boolean = true;
  @Input() mensagemEnviada: any

  constructor(private srvContatoService: ContatoService) { }

  ngOnInit() {
  }

  verificaValidTouchedErro(campo){
    return !campo.valid && (campo.dirty || campo.touched)
  }

  verificaValidTouchedSuccess(campo){
    return campo.valid && (campo.dirty || campo.touched)
  }

  aplicaCssErro(campo){

    let erro = !campo.valid && (campo.dirty || campo.touched)
    let sucesso = campo.valid && (campo.dirty || campo.touched)

    if(!campo.valid && (campo.dirty || campo.touched)){
      return {
        'has-error': this.verificaValidTouchedErro(campo)
      }
    }else{
      return {
        'has-success': this.verificaValidTouchedSuccess(campo)
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
