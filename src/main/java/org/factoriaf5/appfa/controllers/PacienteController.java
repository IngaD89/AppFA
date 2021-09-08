package org.factoriaf5.appfa.controllers;

import org.factoriaf5.appfa.models.Paciente;
import org.factoriaf5.appfa.repositories.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class PacienteController {
    private PacienteRepository pacienteRepository;
    @Autowired
    public PacienteController(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    @GetMapping("/pacientes")
    public List<Paciente> allPacientes(){
        return pacienteRepository.findAll();
    }
    @GetMapping( "/pacientes/{id}")
    public Optional<Paciente> findById(@PathVariable Long id) {
        return pacienteRepository.findById(id);
    }
    @PostMapping("/altas")
    public Paciente addPaciente(@RequestBody Paciente paciente) {
        return pacienteRepository.save(paciente);
    }
    @DeleteMapping("/pacientes/{id}")
    public ResponseEntity<Paciente> delete(@PathVariable Long id) {
        Paciente paciente = pacienteRepository.findById(id).orElse(null);
        pacienteRepository.deleteById(id);
        return ResponseEntity.ok().body(paciente);
    }
    @PutMapping("/pacientes/edit/{id}")
    public ResponseEntity<Paciente> edit(@PathVariable Long id) {
        Paciente paciente = pacienteRepository.findById(id).orElse(null);
        assert paciente != null;
        pacienteRepository.save(paciente);
        return ResponseEntity.ok().body(paciente);
    }

}
