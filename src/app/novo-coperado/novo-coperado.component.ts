import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Validacao } from '../validations/validation';
// import { NgxSpinnerService } from "ngx-bootstrap-spinner";
@Component({
  selector: 'app-novo-coperado',
  templateUrl: './novo-coperado.component.html',
  styleUrls: ['./novo-coperado.component.css']
})
export class NovoCoperadoComponent implements OnInit {
  @Input() name;
  @Input() situationCpf;
  hasCooperado = false;
  formulario: FormGroup;
  messageValidation = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,

  ) {

  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      cpf: [null, ([Validators.required, Validacao.ValidaCpf])],
    })
  }

  getCooperado() {
    this.loading = true;
    this.hasCooperado = false;

    setTimeout(() => {
      this.hasCooperado = true
      this.loading = false;
    }, 3000);
  }

  get cpf() {
    return this.formulario.get('cpf');
  }


}
