package com.CadastroPositivo.cases.service;

import com.CadastroPositivo.cases.dto.CostumerDTO;
import com.CadastroPositivo.cases.model.Costumer;

import java.util.List;

public interface CostumerService {
    Costumer saveCostumer(CostumerDTO costumerDTO);
    List<Costumer> findAllCostumers();
    List<Costumer> findByNome(String nome);
    Costumer updateCostumer(String cpf, CostumerDTO costumerDTO);
    Costumer disableCostumer(String cpf);
}
