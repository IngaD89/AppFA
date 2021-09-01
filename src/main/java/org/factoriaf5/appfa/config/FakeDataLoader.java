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
                        new Paciente (1L, "403998", "646474723", "SI", "14/12/2022", "16/12/2022", "27/12/2022", "14/12/2023", "14/12/2022", "archivo.jpg"),
                        new Paciente(2L, "503998", "546474723", "NO", "09/05/2022", "09/05/2022", "09/05/2022", "09/05/2022", "09/05/2022", "archivo.png")
                )
        );
    }
}
