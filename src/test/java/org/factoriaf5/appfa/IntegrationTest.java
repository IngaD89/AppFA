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
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc

public class IntegrationTest {

    @Autowired
    MockMvc mockMvc;

    private final PacienteRepository pacienteRepository;

    @Autowired
    public IntegrationTest(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    @Test
    public void devuelveListaDePacientes() throws Exception{
        List<Paciente> pacientes = List.of(
                new Paciente (1L, "403998", "646474723", "14/12/2022", "16/12/2022", "27/12/2022", "14/12/2023", "14/12/2022", "archivo.jpg", "SI", "archivo.jpg"),
                new Paciente(2L, "503998", "546474723", "09/05/2022", "09/05/2022", "09/05/2022", "09/05/2022", "09/05/2022", "archivo.png", "NO", "archivo.png")
        );
        pacienteRepository.saveAll(pacientes);
        mockMvc.perform(get("/pacientes"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].nhc", equalTo("403998")))
                .andExpect(jsonPath("$[0].telefono", equalTo("646474723")))
                .andExpect(jsonPath("$[0].consentimiento", equalTo("SI")))
                .andExpect(jsonPath("$[0].primeraLlamada", equalTo("14/12/2022")))
                .andExpect(jsonPath("$[0].segundaLlamada", equalTo("16/12/2022")))
                .andExpect(jsonPath("$[0].terceraLlamada", equalTo("27/12/2022")))
                .andExpect(jsonPath("$[0].pruebaEsfuerzo", equalTo("14/12/2023")))
                .andExpect(jsonPath("$[0].eco", equalTo("14/12/2022")))
                .andExpect(jsonPath("$[0].archivo", equalTo("archivo.jpg")))
                .andExpect(jsonPath("$[1].nhc", equalTo("503998")))
                .andExpect(jsonPath("$[1].telefono", equalTo("546474723")))
                .andExpect(jsonPath("$[1].consentimiento", equalTo("NO")))
                .andExpect(jsonPath("$[1].primeraLlamada", equalTo("09/05/2022")))
                .andExpect(jsonPath("$[1].segundaLlamada", equalTo("09/05/2022")))
                .andExpect(jsonPath("$[1].terceraLlamada", equalTo("09/05/2022")))
                .andExpect(jsonPath("$[1].pruebaEsfuerzo", equalTo("09/05/2022")))
                .andExpect(jsonPath("$[1].eco", equalTo("09/05/2022")))
                .andExpect(jsonPath("$[1].archivo", equalTo("archivo.png")));


    }
}
