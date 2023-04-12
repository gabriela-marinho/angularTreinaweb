import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import{ HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit{

  @ViewChild('myForm') templateForm : any;
  informacoes = {
    nome: '',
    idade: '',
    email: '',
    confirmaEmail: ''
  }

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit(){

  }

  onSubmit(myForm: NgForm){
    console.log(myForm);
  }

  getAdress(cep: string){
    this.http.get(`http://viacep.com.br/ws/${cep}/json`)
      .subscribe(
        vemDoSite =>{
          /* Aqui abaixo se fosse pegar valor por valor, agrosso modo
          se eu fosse atribuir um valor teria que colocar dentro de
          uma cosntante,chamar minha variavel endereco para transferir
           o valor que eu setei
           */
                //const values = this.templateForm.value;
                // values.endereco.bairro = 'meu bairro';
                // values.endereco.localidade = 'dcfolsdfo';
                //this.templateForm.setValue(values);
          /* No caso abaixo eu me inscrevi no evento em q vai trazer a
          requisição do site com o objeto : 'vemDoSite', e com patchValue
          eu trago os valores e atualizo o html com o objeto do 'vemDoSite'
           */
                this.templateForm.form.patchValue({endereco:vemDoSite});
        }
      )
  }

}
