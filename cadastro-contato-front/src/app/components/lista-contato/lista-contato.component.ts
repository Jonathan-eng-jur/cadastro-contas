import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ContatoService } from './../../services/contato.service';
import { IContato } from './../../models/contato.model';
import { ContatoEditar } from 'src/app/shared/contatoEditar';

@Component({
  selector: 'lista-contato',
  templateUrl: './lista-contato.component.html',
  styleUrls: ['./lista-contato.component.css']
})
export class ListaContatoComponent implements OnInit {

  listaContatos: any;
  exibeEdicao: boolean = false;
  formContato: FormGroup;
  contatoEditado: IContato;
  exibeAlertaSucesso: boolean = false;
  exibeAlertaErro: boolean = false;
  mensagemSucesso: string = '';
  mensagemErro: string = '';
  cpf_id: string;

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.listarContatos();
    this.createForm(new ContatoEditar());
  }

  //CRIA O FORMULARIO
  createForm(contato: ContatoEditar) {
    this.formContato = new FormGroup({      
      nome: new FormControl(contato.nome),
      cpf: new FormControl(contato.cpf),      
      celular: new FormControl(contato.celular)
    })
  }

  //HABILITA OS CAMPOS DE EDIÇÃO DO CONTATO
  editarContato(contato){  
    this.cpf_id = contato.cpf_cadastro;      
    this.formContato.setValue({      
      nome: contato.nome_cadastro, 
      cpf: contato.cpf_cadastro, 
      celular: contato.telefone_cadastro,       
    });   
    this.exibeEdicao = true;
  }

  //SALVA A EDIÇÃO DO CONTATO
  salvar(){              
    var nome = this.formContato.controls.nome.value
    var cpf = this.formContato.controls.cpf.value
    var celular = this.formContato.controls.celular.value
    
    this.contatoService.editarContato(nome, this.cpf_id, cpf, celular)
      .subscribe(
        response => { //SUCESSO NA REQUISICAO        
          this.exibeAlertaSucesso = true;
          this.exibeAlertaErro = false;          
          this.mensagemSucesso = 'Contato editado com sucesso!';
          this.exibeEdicao = false;
          this.listarContatos();
          //LOG SUCESSO
          console.log(
            "CONTATO EDITADO COM SUCESSO \n" + 
            "\nheader: " + JSON.stringify(response.headers) + 
            "\nstatus: " + response.status + 
            "\nbody: " + JSON.stringify(response.body)
          );
      },(error) => { //ERRO NA REQUISICAO
          this.exibeAlertaSucesso = false;
          this.exibeAlertaErro = true;          
          this.mensagemErro = 'Erro ao editar contato!';
          //LOG ERRO
          console.log(
            "ERRO AO EDITAR O CONTATO: \n"  + 
            "\nheader: " + JSON.stringify(error.headers) + 
            "\nstatus: " + error.status + 
            "\nmessage: " + error.message + 
            "\nurl: " + error.url
          );
      });
  }

  //EXCLUIR UM CONTATO ATRAVÉS DO ID
  excluirContato(cpf: string){
    this.contatoService.excluirContato(cpf)
      .subscribe(response => { //SUCESSO NA REQUISICAO  
        this.listarContatos();
          this.exibeAlertaSucesso = true;
          this.exibeAlertaErro = false;          
          this.mensagemSucesso = 'Contato excluido com sucesso!';
          this.exibeEdicao = false;
          //LOG SUCESSO
          console.log(
            "CONTATO EXCLUIDO COM SUCESSO \n" + 
            "\nheader: " + JSON.stringify(response.headers) + 
            "\nstatus: " + response.status + 
            "\nbody: " + JSON.stringify(response.body)
          );
      },(error) => { //ERRO NA REQUISICAO
          this.exibeAlertaSucesso = false;
          this.exibeAlertaErro = true;          
          this.mensagemErro = 'Erro ao excluir contato!';
          //LOG ERRO
          console.log(
            "ERRO AO EXCLUIR O CONTATO: \n"  + 
            "\nheader: " + JSON.stringify(error.headers) + 
            "\nstatus: " + error.status + 
            "\nmessage: " + error.message + 
            "\nurl: " + error.url
          );
      }); 
  }

  //LISTA TODOS OS CONTATOS EXISTENTES
  listarContatos(){
    this.contatoService.listarContatos()
      .subscribe(
        response => { //SUCESSO NA REQUISICAO      
          this.listaContatos = response.body;
            this.listaContatos.forEach((contato, index) => {
              if(!contato.active){
                this.listaContatos.splice(index, 1);
              }
          });         
          //LOG SUCESSO
          console.log(
            "CONSULTA DA LISTA DE CONTATOS COM SUCESSO \n" + 
            "\nheader: " + JSON.stringify(response.headers) + 
            "\nstatus: " + response.status + 
            "\nbody: " + JSON.stringify(response.body)
          );          
      },(error) => { //ERRO NA REQUISICAO
          //LOG ERRO
          console.log(
            "ERRO AO CONSULTAR A LISTA DE CONTATOS: \n"  + 
            "\nheader: " + JSON.stringify(error.headers) + 
            "\nstatus: " + error.status + 
            "\nmessage: " + error.message + 
            "\nurl: " + error.url
          );          
      });
  }

}