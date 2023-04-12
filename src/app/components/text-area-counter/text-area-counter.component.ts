import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-text-area-counter',
  templateUrl: './text-area-counter.component.html',
  styleUrls: ['./text-area-counter.component.css']
})
export class TextAreaCounterComponent implements  OnInit{

  @Input() formulario: FormGroup | any;
  @Input() label = '';
  @Input() campo: string | any;
  @Input() maxlength: number | any;
  @Input() classComponent = 'form-control';
  @Input() visivel = false;
  @Input() eventoTeclado: any;
  value: any;
  constructor() {
  }

  ngOnInit(): void {
    // this.formulario.get('campo').valueChanges.subscribe(
    //   (value: any) => console.log('nome alterado: ', value))
  }



}
