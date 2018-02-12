import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContatoModel} from "../model/contato.model";
import {ContatoService} from "../contato/contato.service";

@Component({
  selector: 'app-contato-formulario-reativo',
  templateUrl: './contato-formulario-reativo.component.html',
  styleUrls: ['./contato-formulario-reativo.component.css']
})
export class ContatoFormularioReativoComponent implements OnInit {

  contato = new ContatoModel();

  expressaoString: string = '^([\\\'\\.\\^\\~\\´\\`\\\\áÁ\\\\àÀ\\\\ãÃ\\\\âÂ\\\\éÉ\\\\èÈ\\\\êÊ\\\\íÍ\\\\ìÌ\\\\óÓ\\\\òÒ\\\\õÕ\\\\ôÔ\\\\úÚ\\\\ùÙ\\\\çÇaA-zZ]+)+((\\s[\\\'\\.\\^\\~\\´\\`\\\\áÁ\\\\àÀ\\\\ãÃ\\\\âÂ\\\\éÉ\\\\èÈ\\\\êÊ\\\\íÍ\\\\ìÌ\\\\óÓ\\\\òÒ\\\\õÕ\\\\ôÔ\\\\úÚ\\\\ùÙ\\\\çÇaA-zZ]+)+)?$'
  expressaoTelefone: string = '^(\\([0-9]{2}\\))\\d{4,5}-\\d{4,5}$';
  expressaoEmail: string = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?'

  @Input() mensagemEnviada: any

  public mostraMensagem: boolean;


  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private srvContatoService: ContatoService
  ) { }

  ngOnInit() {
    this.mostraMensagem = false
    // this.formulario = new FormGroup({
    //   nome: new FormControl('null'),
    //   email: new FormControl('null')
    // });

    this.formulario = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.pattern(this.expressaoString)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.expressaoEmail)]),
      telefone: this.formBuilder.control('', [Validators.required, Validators.pattern(this.expressaoTelefone)]),
      mensagem: this.formBuilder.control('', [Validators.required, Validators.minLength(10)]),
    })
  }

  public validaMensagem(nomecampo){

      let campo = this.formulario.get(nomecampo);

      if(campo != null){
        if(!campo.valid && (campo.dirty || campo.touched)){
          this.mostraMensagem = !campo.valid && (campo.dirty || campo.touched)
        }

        if(campo.valid && (campo.dirty || campo.touched)){
          this.mostraMensagem = false
        }
      }
  }

  public validaIconeInput(campo){

    if(!this.formulario.get(campo).valid && (this.formulario.get(campo).dirty || this.formulario.get(campo).touched)){
      return {
        'glyphicon glyphicon-asterisk form-control-feedback': this.validaCssInput(campo),
      }
    }else{
      return {
        'glyphicon glyphicon-ok form-control-feedback': this.validaCssInput(campo)
      }
    }
  }

  public aplicaCssErro(campo){

    if(!this.formulario.get(campo).valid && (this.formulario.get(campo).dirty || this.formulario.get(campo).touched)){
      return {
        'has-error': this.validaCssInput(campo)
      }
    }else{
      return {
        'has-success': this.validaCssInput(campo)
      }
    }
  }

  public enviarReativo() {

    let f = JSON.stringify(this.formulario.value)

    this.srvContatoService.enviarFormulario(f).subscribe( resp => {
      this.mensagemEnviada = resp
      this.contato = new ContatoModel()

      this.resetarFormulario()
    })

  }

  private resetarFormulario(){
    this.formulario.reset();
  }

  private validaCssInput(campo){

    let campoRecebido = this.formulario.get(campo)

    if(!campoRecebido.valid && (campoRecebido.dirty || campoRecebido.touched)){
      return !campoRecebido.valid && (campoRecebido.dirty || campoRecebido.touched)
    }else{
      return campoRecebido && (campoRecebido.dirty || campoRecebido.touched)
    }
  }

}
