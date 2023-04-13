import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formularios-reativos',
  templateUrl: './formularios-reativos.component.html',
  styleUrls: ['./formularios-reativos.component.css']
})
export class FormulariosReativosComponent implements OnInit {
  //myFormList: FormGroup;


  myForm: FormGroup | any;
  value: any;
  states = [
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Minas Gerais', sigla: 'MG' }
  ]
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
   // private validatorsService: ValidatorsService
  ) { }

  ngOnInit() {
    /*this.myForm = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    const fb = this.formBuilder;
    this.myForm =  fb.group({
      informacoes: fb.group({
        nome: [null, Validators.required, Validators.minLength(4)],
        idade: [''],
        email: [null, [Validators.required, Validators.email] ],
        confirmaEmail: [''],
        sexo: [''],
        emprego: [null, [Validators.pattern('true')]]
      }),
      endereco: fb.group({
        cep: [' '],
        numero:[' '],
        complemento:[' '],
        logradouro:[' '],
        bairro:[' '],
        localidade:[' '],
        uf:[' ']

      })
    })

    this.myForm.get('informacoes.nome').valueChanges.subscribe(
        (value: any) => console.log('nome alterado: ', value))
  }

  // addFruit(){
  //   const fruits = this.myFormList.get('fruits') as FormArray;
  //   fruits.push(this.createFruit());
  // }

  // removeFruit(index){
  //   const fruits = this.myFormList.get('fruits') as FormArray;
  //   fruits.removeAt(index);
  // }

  // createFruit(){
  //   return this.formBuilder.group({
  //     name: [null, [Validators.required, Validators.minLength(4)]],
  //     price: [null, [Validators.required]]
  //   })
  // }

  onSubmit(){
    console.log(this.myForm);
  }

  getAdress(){(
    this.http.get(`http://viacep.com.br/ws/${this.myForm.get('endereco.cep').value}/json/`))
      .subscribe(
        vemDoSite =>{
          this.myForm.patchValue({endereco :vemDoSite});
        }
      )
  }

  setState(){
    const myState = {nome: 'São Paulo',sigla: 'SP'};
    this.myForm.get('endereco.uf').setValue(myState);
  }

  compareStates(obj1:any ,obj2:any){
    if(obj1 && obj2){
      return obj1.sigla === obj2.sigla;
    }
    return false;
  }

}
