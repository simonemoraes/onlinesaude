import {Component, OnInit, ContentChild, AfterContentInit, Input} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnInit, AfterContentInit {

  input: any;

  @ContentChild(NgModel) model: NgModel;


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model;
    if(this.input === undefined){
      throw new Error("Este component..");
    }

  }

}
