package org.factoriaf5.appfa.controllers;

import org.factoriaf5.appfa.models.Alert;
import org.factoriaf5.appfa.models.Paciente;
import org.factoriaf5.appfa.repositories.AlertRepository;
import org.factoriaf5.appfa.repositories.PacienteRepository;
import org.factoriaf5.appfa.services.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class PacienteController {
    private PacienteRepository pacienteRepository;
    private AlertRepository alertRepository;
    private PacienteService pacienteService;


    @Autowired
    public PacienteController(PacienteRepository pacienteRepository,
                              AlertRepository alertRepository) {
        this.pacienteRepository = pacienteRepository;
        this.alertRepository = alertRepository;
    }

    @GetMapping("/pacientes")
    public List<Paciente> allPacientes(){
        return pacienteRepository.findAll();
    }

    @GetMapping( "/pacientes/{id}")
    public Optional<Paciente> findById(@PathVariable Long id) {
        return pacienteRepository.findById(id);
    }

    @PostMapping("/pacientes")
    public Paciente addPaciente(@RequestBody Paciente paciente){

        if (alerts.getFechaRegistro() != null) {
            List<Alert> alertasDelPaciente = List.of(
                    new Alert(paciente.getFechaRegistro().plusMonths(1)),
                    new Alert(paciente.getFechaRegistro().plusMonths(3)),
                    new Alert(paciente.getFechaRegistro().plusYears(1))
            );

            alertRepository.saveAll(alertasDelPaciente);
        }

        return pacienteRepository.save(paciente);
    }

    @DeleteMapping("/pacientes/{id}")
    public ResponseEntity<Paciente> delete(@PathVariable Long id) {
        Paciente paciente = pacienteRepository.findById(id).orElse(null);
        pacienteRepository.deleteById(id);
        return ResponseEntity.ok().body(paciente);
    }

    @PutMapping("/altas/edit/{id}")
    public ResponseEntity<Paciente> edit(@PathVariable Long id) {
        Paciente paciente = pacienteRepository.findById(id).orElse(null);
        assert paciente != null;
        pacienteRepository.save(paciente);
        return ResponseEntity.ok().body(paciente);
    }
    /*@PostMapping("/altas")
    public String addPaciente(@ModelAttribute Paciente paciente, @RequestParam("image") MultipartFile multipartFile) throws IOException {
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        paciente.setArchivo(fileName);
        pacienteService.save(paciente);
        String uploadDir = "paciente-photo/" + paciente.getId();
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        return "redirect:/pacientes";
    }*/

}
