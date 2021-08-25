package org.factoriaf5.appfa;

import org.factoriaf5.appfa.models.Paciente;
import org.factoriaf5.appfa.repositories.PacienteRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import java.util.List;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc

public class IntegrationTest {

    @Autowired
    MockMvc mockMvc;

    private PacienteRepository pacienteRepository;

    @Autowired
    public IntegrationTest(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    @Test
    public void devuelveListaDePacientes() throws Exception{
        List<Paciente> pacientes = List.of(
                new Paciente (1L, "403998", "646474723"),
                new Paciente(2L, "503998", "546474723")
        );
        pacienteRepository.saveAll(pacientes);
        mockMvc.perform(get("/pacientes"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].nhc", equalTo("403998")))
                .andExpect(jsonPath("$[0].telefono", equalTo("646474723")))
                .andExpect(jsonPath("$[1].nhc", equalTo("503998")))
                .andExpect(jsonPath("$[1].telefono", equalTo("546474723")));


    }
}
