package com.CadastroPositivo.cases.controller;

import com.CadastroPositivo.cases.dto.CostumerDTO;
import com.CadastroPositivo.cases.model.Costumer;
import com.CadastroPositivo.cases.service.CostumerService;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/itau")
@CrossOrigin("*")
public class AppController {

    private final CostumerService costumerService;

    public AppController(CostumerService costumerService) {
        this.costumerService = costumerService;
    }

	// CRUD
	// CREATE --> POST
    @SuppressWarnings({ "unchecked", "rawtypes" })
	@PostMapping("cadastro")
    public ResponseEntity<Costumer> newCostumer(@Valid @RequestBody CostumerDTO costumerDTO) {
        return new ResponseEntity(costumerService.saveCostumer(costumerDTO), HttpStatus.OK);
    }
    
    // READ --> GET POR NOME
    @GetMapping("cadastro")
    public ResponseEntity<List<Costumer>> findCostumerByName(@Param("nome") String nome) {
        return ResponseEntity.ok(costumerService.findByNome(nome));
    }
    
    // READ --> GET ALL
    @GetMapping("cadastro/all")
    public ResponseEntity<List<Costumer>> allCostumers() {
        return ResponseEntity.ok(costumerService.findAllCostumers());
    }
    
    // READ --> PUT
    @PutMapping("cadastro/{cpf}")
    public ResponseEntity<Costumer> updateCostumer(
            @PathVariable("cpf") String cpf,
            @Valid @RequestBody CostumerDTO costumerDTO
    ) {
        return ResponseEntity.ok(costumerService.updateCostumer(cpf, costumerDTO));
    }
    
    // READ --> DELETE
    @DeleteMapping("cadastro/{cpf}")
    public ResponseEntity<Costumer> disableCostumer(@PathVariable("cpf") String cpf) {
        return ResponseEntity.ok(costumerService.disableCostumer(cpf));
    }

}
