package org.factoriaf5.appfa.services;


import org.factoriaf5.appfa.models.Paciente;
import org.factoriaf5.appfa.repositories.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacienteService {
    private final PacienteRepository pacienteRepository;

    @Autowired
    public PacienteService(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    public List<Paciente> allPacientes() {
        List<Paciente> allPacientes = (List<Paciente>) pacienteRepository.findAll();
    return allPacientes;
    }
    public void save(Paciente paciente) {
    pacienteRepository.save(paciente);
    }
    public Paciente findById(Long id) {
        return pacienteRepository.findById(id).orElse(null);
    }
    public void delete(Long id){
        pacienteRepository.deleteById(id);
    }
}
