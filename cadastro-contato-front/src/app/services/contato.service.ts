import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContato } from '../models/contato.model';

@Injectable({ providedIn: 'root' })
export class ContatoService{

    constructor(private http: HttpClient){}

    //RETORNA ENDPOINT API GET
    API_GET():string {
        return "http://localhost:9080/itau/cadastro/all";
    }

    //RETORNA ENDPOINT API POST
    API_POST():string {
        return "http://localhost:9080/itau/cadastro";
    }

    //RETORNA ENDPOINT API DELETE E PUT
    API_DELETE_PUT(cpf: string):string {
        return "http://localhost:9080/itau/cadastro/" + cpf;
    }

    //LISTA TODOS OS CONTATOS
    listarContatos(){        
        return this.http.get<IContato>(this.API_GET(), { observe: 'response'})
    }

    //EDITA UM CONTATO ATRAVES DO ID
    editarContato(nome, cpf_id,cpf, celular){
        var body = {
            nome_cadastro : nome,
            cpf_cadastro : cpf,
            telefone_cadastro : celular
        }

        alert("CPF: " + cpf)
        alert("Body: " + JSON.stringify(body))
        return this.http.put<IContato>(this.API_DELETE_PUT(cpf_id), body, { observe: 'response'});
    }
    
    //EXCLUI UM CONTATO ATRAVES DO ID
    excluirContato(cpf: string){
        return this.http.delete<any>(this.API_DELETE_PUT(cpf), { observe: 'response'});
    }

    //CADASTRA UM CONTATO
    cadastrarUsuario(contato: IContato){        
        var body = {
            nome_cadastro : contato.nome,
            cpf_cadastro : contato.cpf,            
            telefone_cadastro : contato.celular
        }        
        return this.http.post<any>(this.API_POST(), body, { observe: 'response'});
    }

}