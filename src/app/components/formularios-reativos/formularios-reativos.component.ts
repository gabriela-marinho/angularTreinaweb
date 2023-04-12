import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-formularios-reativos',
  templateUrl: './formularios-reativos.component.html',
  styleUrls: ['./formularios-reativos.component.css']
})
export class FormulariosReativosComponent implements  OnInit{

  //myFormList: FormGroup;

  myForm: FormGroup | any;
  value: any;
  states = [
    {nome: 'Ceara',sigla: 'CE'},
    {nome: 'São Paulo',sigla: 'SP'},
    {nome: 'João Pessoa',sigla: 'JP'},
    {nome: 'Bahia',sigla: 'BA'},
  ]


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient

  ) {}

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
    const fb = this.formBuilder;
    this.myForm =  fb.group({
      informacoes: fb.group({
        nome: [' ', Validators.required, Validators.minLength(4)],
        idade:[' '],
        email:[' ',Validators.required, Validators.email],
        confirmaEmail:[' '],
        emprego:[true],
        sexo:['V', Validators.pattern('true')]
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

  // public counterMethod() {
  //   let limite = 50;
  //  document.querySelector('nome');
  //   return  - limite;
  // }


}
