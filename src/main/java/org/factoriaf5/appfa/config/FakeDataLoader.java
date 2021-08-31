package org.factoriaf5.appfa.config;

import org.factoriaf5.appfa.models.Paciente;
import org.factoriaf5.appfa.repositories.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
public class FakeDataLoader {

    private PacienteRepository pacienteRepository;

    @Autowired
    public FakeDataLoader(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    @PostConstruct
    void loadFakeData() {
        pacienteRepository.deleteAll();
        pacienteRepository.saveAll(
                List.of(
                        new Paciente(1L, "458562",
                                "677037556",
                                "09/05/2022")
                )
        );
    }
}
