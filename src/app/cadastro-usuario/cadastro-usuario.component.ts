import { Component, OnInit } from '@angular/core';
import { PoPageAction } from '@portinari/portinari-ui';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  formulario: FormGroup;

  perguntas = ['Barra é surfista?', 'Barra é pescador?', 'Barra é skatista?'];

  public readonly actions: Array<PoPageAction> = [
    { label: 'Salvar', action: this.salvar },
  ];

  constructor(
    private fb: FormBuilder
  ) {
    this.createReactiveForm();
  }

  options = [{ value: '1', label: 'Sim' }, { value: '2', label: 'Não' }];

  createReactiveForm() {
    this.formulario = this.fb.group({
      perguntas: this.buildPerguntas()
    });
  }

  buildPerguntas() {
    const values = this.perguntas.map(v => new FormControl(false));
    return this.fb.array(values);
  }

  getPerguntasControls() {
    return this.formulario.get('perguntas') ? (this.formulario.get('perguntas') as FormArray).controls : null;
  }

  onClick() {
    alert('Po Button!');
  }

  ngOnInit() {
  }

  salvar() {
    console.log(this.formulario.value);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      perguntas: valueSubmit.perguntas
      .map((v, i) => v ? this.perguntas[i] : null)
      .filter(v => v !== null)
    });

    // console.log(valueSubmit);
  }

}
