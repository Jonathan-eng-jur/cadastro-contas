import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Contato } from './../../shared/contato';
import { ContatoService } from './../../services/contato.service';
import { IContato } from './../../models/contato.model';

@Component({
  selector: 'cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css']
})

export class CadastroContatoComponent implements OnInit {

  mask:string;
  nome: string = '';
  cpf: string = '';  
  celular: string = '';
  contato: IContato;
  listaContatos: IContato[];
  formContato: FormGroup;
  exibeAlertaSucesso: boolean = false;
  exibeAlertaErro: boolean = false;
  mensagemErro: string = '';

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.createForm(new Contato());
  }

  //CRIA O FORMULARIO
  createForm(contato: Contato) {
    this.formContato = new FormGroup({
      nome: new FormControl(contato.nome),
      cpf: new FormControl(contato.cpf),      
      celular: new FormControl(contato.celular)      
    })
  }

  //CADASTRA UM CONTATO
  cadastrar(){        
    this.contato = this.formContato.value;
    this.contatoService.cadastrarUsuario(this.contato)
      .subscribe(response => { //SUCESSO NA REQUISICAO
        if(response.status == 200){
          this.formContato.reset();
          this.exibeAlertaSucesso = true;
          this.exibeAlertaErro = false;           
        }        
        //LOG SUCESSO
        console.log(
          "CADASTRO REALIZADO COM SUCESSO \n" + 
          "\nheader: " + JSON.stringify(response.headers) + 
          "\nstatus: " + response.status + 
          "\nbody: " + JSON.stringify(response.body)
        );

      },(error) => { //ERRO NA REQUISICAO
          if(error.status == 500){
            this.exibeAlertaErro = true;
            this.exibeAlertaSucesso = false;
            this.mensagemErro = 'Usuário ja está cadastrado!';
          }else{
            this.exibeAlertaErro = true;
            this.exibeAlertaSucesso = false;
            this.mensagemErro = 'Erro ao cadastrar!';
          }
          //LOG ERRO
          console.log(
            "ERRO AO REALIZAR CADASTRO: \n"  + 
            "\nheader: " + JSON.stringify(error.headers) + 
            "\nstatus: " + error.status + 
            "\nmessage: " + error.message + 
            "\nurl: " + error.url
          );
      });
  }

  

}
