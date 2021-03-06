# Cadastro Contas

## Informações Frontend
- Tecnologoias utilizadas: Angular 9
- Serviços AWS: S3 ([link](http://cadastro-contato.s3-website-sa-east-1.amazonaws.com/cadastro))
- Repositório: github.com/Jonathan-eng-jur/cadastro-contas/tree/main/cadastro-contato-front
- Procedimentos para rodar local:
  1. Realizar o download ou realizar o clone da aplicação pelo link do repositório mencionado anteriormente;
  2. Acessar a pasta raiz da aplicação via terminal;
  3. Digitar o comando "npm install" para instalar todas as dependências do projeto;
  4. Digitar o comando "npm start" para rodar o projeto localmente;
  5. Utilizar o navegador de sua preferência e acessar a url através desse ([link](http://localhost:4200));
  
## Informações Backend
- Tecnologoias utilizadas: Java e Spring Boot
- Serviços AWS: EC2 ([link](ec2-35-175-235-136.compute-1.amazonaws.com))
- Repositório: github.com/Jonathan-eng-jur/cadastro-contas/tree/main/cadastro-conta-backend
- Infra: Docker ([link](https://hub.docker.com/r/advogatoblackshark17/cadastro))
- Procedimentos para rodar local:
  1. Realizar o download ou realizar o clone da aplicação pelo link do repositório mencionado anteriormente;
  2. Realizar o startup do projeto com a IDE Spring Tool Switch 4;
  3. Abrir a ferramenta Postman e importar a Collection "CasdastroContas.postman_collection.json" que se encontra na pasta raiz do projeto;
  4. Realizar os testes locais de chamada a API Spring através da ferramenta Postman;

## Informações Banco de Dados
- Tecnologoias utilizadas: Dynamo DB
- Serviços AWS: Dynamo DB e Localstack
- Infra: Docker
- Procedimentos para rodar local:
  1. Realizar as configurações do aplication properties, abrir o terminal em qualquer diretório e rodar os seguinte comando "aws configure" e siga as insruções informadas. Em caso de dúvida acessa a documentação através do ([link](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html));
  2. Startup do Dynamo DB, rodar o comando "localstack start";
  3. Rodar o comando "docker ps" para verificar se o container está rodando corretamente;
  4. Rodar o comando "aws dynamodb create-table --cli-input-json file://costumer_table.json --endpoint-url=http://localhost:4566" dentro do diretório raiz do projeto onde contem o arquivo costumer_table.json, esse procedimento irá fazer com que seja criada a tabela do banco;
  5. Ainda no mesmo diretório vamos rodar o comando "aws scan --table-name=costumer_table --endpoint-url=http://localhost:4566 --region=us-east-1" para confirmar a criação do nosso banco de dados;
  6. Pronto, agora o nosso banco de dados Dynamo DB está pronto para uso;
 
 
## Requisitos da aplicação
1. Listar Contatos
<br />Requisito consite em poder listar e exibir os contatos ja salvos no banco de dados na tela para o usuário.
<br />API: http://localhost:9080/itau/cadastro/all
<br />Método: GET
<br />Retorno: 
``` json
[
    {
        "nome_cadastro": "Jonathan Cavalcanti de Paula",
        "cpf_cadastro": "44281998802",
        "telefone_cadastro": "11992376816",
        "active": false
    }
]
```
![Lista de contatos](https://imagens-cadastro-contato.s3-sa-east-1.amazonaws.com/1-Listagem+de+contatos.jpeg)

2. Cadastrar contato
<br />Requisito consite em poder realizar o cadastro de um contato.
<br />API: http://localhost:9080/itau/cadastro
<br />Método: POST
<br />Body: 
``` json
{
    "company_name": "Jonathan",
    "company_document_number": "12345678999",
    "phone_number": "193"
}
```
![Dados Cadastro](https://imagens-cadastro-contato.s3-sa-east-1.amazonaws.com/2-Dados+Cadastro.jpeg)
![Contato Cadastrado](https://imagens-cadastro-contato.s3-sa-east-1.amazonaws.com/3-Cadastro+Sucesso.jpeg)
![Lista com Contato Cadastrado](https://imagens-cadastro-contato.s3-sa-east-1.amazonaws.com/4-Listando+Novo+Cadastro.jpeg)

3. Editar contato
<br />Requisito consite em poder realizar a edição de um contato.
<br />API: http://localhost:9080/itau/cadastro/{cpf}
<br />Método: PUT
<br />Body: 
``` json
{
    "company_name": "Ricardo",
    "company_document_number": "123456999",
    "phone_number": "11999999999"
}
```
![Dados Edicao Contato](https://imagens-cadastro-contato.s3-sa-east-1.amazonaws.com/5-Editando+Dados+Cadastro.jpeg)
![Contato Editado](https://imagens-cadastro-contato.s3-sa-east-1.amazonaws.com/6-Cadastro+Editado+com+Sucesso.jpeg)

4. Excluir Contato
<br />Requisito consite em poder excluir um contato.
<br />API: http://localhost:9080/itau/cadastro/{cpf}
<br />Método: DELETE
![Lista para Excluir](https://imagens-cadastro-contato.s3-sa-east-1.amazonaws.com/8-Lista+para+Excluir.JPG)
![Lista para Excluir](https://imagens-cadastro-contato.s3-sa-east-1.amazonaws.com/9-Contato+Excluido.JPG) 
  
