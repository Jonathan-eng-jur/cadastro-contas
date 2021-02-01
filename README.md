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
  3. Abrir a ferramenta Postman e importar a Collection "" que se encontra na pasta raiz do projeto;
  4. Realizar os testes locais de chamada a API Spring através da ferramenta Postman;


## Informações Banco de Dados
- Tecnologoias utilizadas: Dynamo DB
- Serviços AWS: Dynamo DB e Localstack
- Infra: Docker
