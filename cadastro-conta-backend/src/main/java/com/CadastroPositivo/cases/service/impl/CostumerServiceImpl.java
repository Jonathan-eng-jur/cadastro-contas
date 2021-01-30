package com.CadastroPositivo.cases.service.impl;

import com.CadastroPositivo.cases.dto.CostumerDTO;
import com.CadastroPositivo.cases.model.Costumer;
import com.CadastroPositivo.cases.repository.CostumerRepository;
import com.CadastroPositivo.cases.service.CostumerService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CostumerServiceImpl implements CostumerService {

    private final CostumerRepository costumerRepository;

    public CostumerServiceImpl(CostumerRepository costumerRepository) {
        this.costumerRepository = costumerRepository;
    }

    @Override
    public Costumer saveCostumer(CostumerDTO costumerDTO) {
        if(costumerRepository.findByCpf(costumerDTO.getCpf()).isPresent()) {
            throw new RuntimeException("CPF NÃO LOCALIZADO!");
        }
        return costumerRepository.save(costumerDTO.costumerDTOToCostumer());
    }

    @Override
    public List<Costumer> findAllCostumers() {
        return (List<Costumer>) costumerRepository.findAll();
    }

    @Override
    public List<Costumer> findByNome(String nome) {
        return costumerRepository.findBynome(nome);
    }

    @Override
    public Costumer updateCostumer(String cpf, CostumerDTO costumerDTO) {
        Optional<Costumer> costumer =
                costumerRepository.findByCpf(cpf);

        if(costumer.isEmpty()) {
            throw new RuntimeException("CPF NÃO LOCALIZADO!");
        }

        BeanUtils.copyProperties(costumerDTO, costumer.get(), "active", "id");

        return costumerRepository.save(costumer.get());
    }

    @Override
    public Costumer disableCostumer(String cpf) {
        Optional<Costumer> costumer =
                costumerRepository.findByCpf(cpf);

        if(costumer.isEmpty()) {
            throw new RuntimeException("CPF NÃO LOCALIZADO!");
        }

        costumer.get().setActive(false);

        return costumerRepository.save(costumer.get());
    }

}
