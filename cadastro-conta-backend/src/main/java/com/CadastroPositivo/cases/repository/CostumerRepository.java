package com.CadastroPositivo.cases.repository;

import com.CadastroPositivo.cases.model.Costumer;
import org.socialsignin.spring.data.dynamodb.repository.EnableScan;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

@EnableScan
public interface CostumerRepository extends CrudRepository<Costumer, String> {
    List<Costumer> findBynome(String nome);
    Optional<Costumer> findByCpf(String cpf);
	
}
