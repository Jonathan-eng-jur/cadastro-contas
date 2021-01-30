package com.CadastroPositivo.cases.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.CadastroPositivo.cases.model.Costumer;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class CostumerDTO implements Serializable {

    private static final long serialVersionUID = 6318931228062100559L;

    @JsonProperty("nome_cadastro")
    @NotNull
    @NotBlank
    private String nome;

    @JsonProperty("cpf_cadastro")
    @NotNull
    @NotBlank
    private String cpf;

    @JsonProperty("telefone_cadastro")
    @NotNull
    @NotBlank
    private String telefone;

    @JsonProperty("active")
    private Boolean active;

    public Costumer costumerDTOToCostumer() {
        return new Costumer(
                this.nome,
                this.cpf,
                this.telefone,
                true
        );
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
