package com.CadastroPositivo.cases.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAutoGeneratedKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;

import java.io.Serializable;

@DynamoDBTable(tableName = "Costumer")
public class Costumer implements Serializable {

    private static final long serialVersionUID = -4282005207341771716L;

    
    @Id
    @DynamoDBHashKey(attributeName = "id")
    @DynamoDBAutoGeneratedKey
    @JsonIgnore
    private String id;
    
    //ATRIBUTOS
    @DynamoDBAttribute(attributeName = "nome_cadastro")
    @JsonProperty("nome_cadastro")
    private String nome;

    @DynamoDBAttribute(attributeName = "cpf_cadastro")
    @JsonProperty("cpf_cadastro")
    private String cpf;

    @DynamoDBAttribute(attributeName = "telefone_cadastro")
    @JsonProperty("telefone_cadastro")
    private String telefone;

    @DynamoDBAttribute(attributeName = "active")
    @JsonProperty("active")
    private Boolean active;

    public Costumer() {
    }

    public Costumer(
            String nome,
            String cpf,
            String telefone,
            Boolean active
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.active = active;
    }
    
    
    //GETTERS AND SETTERS

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}
