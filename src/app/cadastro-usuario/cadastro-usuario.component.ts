import { Component, OnInit } from '@angular/core';
import { PoPageAction } from '@portinari/portinari-ui';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

class Pergunta {

  formGroup: FormGroup;
  valor: string;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      resposta: ['']
    });
    this.formGroup.get('resposta').valueChanges.subscribe(resposta => this.valor = resposta);
  }
}

class Agrupador {

  formGroup: FormGroup;
  perguntas: Pergunta[] = [];
  perguntasFormArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.perguntasFormArray = fb.array([]);
    this.formGroup = fb.group({
      perguntas: this.perguntasFormArray
    });
  }

  incluirPergunta() {
    const pergunta = new Pergunta(this.fb);
    this.perguntas.push(pergunta);
    this.perguntasFormArray.push(pergunta.formGroup);
  }
}

class FormChecklist {

  formGroup: FormGroup;
  agrupadores: Agrupador[] = [];
  agrupadoresFormArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.agrupadoresFormArray = fb.array([]);
    this.formGroup = fb.group({
      agrupadores: this.agrupadoresFormArray
    });
  }

  incluirAgrupador() {
    const agrupador = new Agrupador(this.fb);
    this.agrupadores.push(agrupador);
    this.agrupadoresFormArray.push(agrupador.formGroup);
  }

  getObjeto(): any {
    const objeto = {};
    this.agrupadores.forEach((agrupador, indiceAgrupador) => {
      const agrupadorObjeto = {};
      objeto[indiceAgrupador] = agrupadorObjeto;
      agrupador.perguntas.forEach((pergunta, indicePergunta) => {
        const perguntaObjeto = {
          resposta: pergunta.valor
        };
        agrupadorObjeto[indicePergunta] = perguntaObjeto;
      });
    });
    console.log(objeto);
    return objeto;
  }
}

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  public form: FormChecklist;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = new FormChecklist(this.fb);
  }

  options = [{ value: '1', label: 'Sim' }, { value: '2', label: 'Não' }];

  incluirAgrupador(form: FormChecklist) {
    form.incluirAgrupador();
  }

  incluirPergunta(agrupador: Agrupador) {
    agrupador.incluirPergunta();
  }

  onClick() {
    alert('Po Button!');
  }

  ngOnInit() {
  }
}
