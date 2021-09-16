package org.factoriaf5.appfa;

import org.factoriaf5.appfa.models.Paciente;
import org.factoriaf5.appfa.repositories.AlertRepository;
import org.factoriaf5.appfa.repositories.PacienteRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class IntegrationTest {

    @Autowired
    private AlertRepository alertRepository;

    @Autowired
    MockMvc mockMvc;

    private final PacienteRepository pacienteRepository;


    @AfterEach
    void setUp() {
        alertRepository.deleteAll();
        pacienteRepository.deleteAll();
    }


    @Autowired
    public IntegrationTest(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    @Test
    public void devuelveListaDePacientes() throws Exception{
        List<Paciente> pacientes = List.of(
                new Paciente (1L, "403998", "646474723", true, false, "archivo.jpg"),
                new Paciente(2L, "503998", "546474723", false, true, "archivo.png")
        );
        pacienteRepository.saveAll(pacientes);
        mockMvc.perform(get("/pacientes"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].nhc", equalTo("403998")))
                .andExpect(jsonPath("$[0].telefono", equalTo("646474723")))
                .andExpect(jsonPath("$[0].fechaRegistro", equalTo(null)))
                .andExpect(jsonPath("$[0].consentimiento", equalTo(false)))
                .andExpect(jsonPath("$[0].miocardio", equalTo(true)))
                .andExpect(jsonPath("$[0].archivo", equalTo("archivo.jpg")))
                .andExpect(jsonPath("$[1].nhc", equalTo("503998")))
                .andExpect(jsonPath("$[1].telefono", equalTo("546474723")))
                .andExpect(jsonPath("$[1].fechaRegistro", equalTo(null)))
                .andExpect(jsonPath("$[1].consentimiento", equalTo(true)))
                .andExpect(jsonPath("$[1].miocardio", equalTo(false)))
                .andExpect(jsonPath("$[1].archivo", equalTo("archivo.png")));
    }

    @Test
    public void creaAlertasAutomaticamenteParaUnPaciente() throws Exception {

        // cuando creamos un paciente
        mockMvc.perform(post("/pacientes").contentType(MediaType.APPLICATION_JSON)
                .content("{ \"fechaRegistro\": \"2022-03-04T10:15:30\", \"nhc\": \"403998\" }"))
                .andExpect(status().isOk());


        // se crean automáticamente las alertas
        mockMvc.perform(get("/alerts"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(3)))
                .andExpect(jsonPath("$[0].dateTime", equalTo("2022-04-04T10:15:30")))
                .andExpect(jsonPath("$[0].nhc", equalTo("403998")))
                .andExpect(jsonPath("$[1].dateTime", equalTo("2022-06-04T10:15:30")))
                .andExpect(jsonPath("$[1].nhc", equalTo("403998")))
                .andExpect(jsonPath("$[2].dateTime", equalTo("2023-03-04T10:15:30")))
                .andExpect(jsonPath("$[2].nhc", equalTo("403998")));

    }


}
