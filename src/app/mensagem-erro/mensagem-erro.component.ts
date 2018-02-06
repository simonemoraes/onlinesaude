import {Component, Input, OnInit} from '@angular/core';
import {InputContainerService} from "../shared/input-container/input-container.service";

@Component({
  selector: 'app-mensagem-erro',
  templateUrl: './mensagem-erro.component.html',
  styleUrls: ['./mensagem-erro.component.css']
})
export class MensagemErroComponent implements OnInit{

  constructor(private mensagemService: InputContainerService) { }

  ngOnInit() {
    console.log('mensagemService')
  }

}
