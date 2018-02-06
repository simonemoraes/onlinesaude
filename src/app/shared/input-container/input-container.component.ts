import {Component, OnInit, ContentChild, AfterContentInit, Input} from '@angular/core';
import { NgModel } from '@angular/forms';

import { InputContainerService } from './input-container.service';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnInit, AfterContentInit{

  input: any;

  // inputCampo: boolean;

  @ContentChild(NgModel) model: NgModel;


  constructor(private inputService: InputContainerService) {}

  ngOnInit() {}

  validaCampo(campo){
    // this.inputService.getInput(campo)
  }

  ngAfterContentInit() {
    this.input = this.model;
    if(this.input === undefined){
      throw new Error("Este component..");
    }

  }

}
