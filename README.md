# AppFA
Nombre del Proyecto:                                      (Proyecto no terminado aún en desarrollo)
                        FA- APP (Fibrosis Auricular)      

-Seguimiento de la Fibrosis Auricular en pacientes que participan en esta investigación. Se trata de una alteración de la conducta normal del corazón (denominada ritmo sinusal), cuando las aurículas no se contraen adecuadamente y los ventrículos lo hacen de manera irregular y excesivamente rápida, impidiendo el normal funcionamiento del corazón.

* EL CLIENTE PIDE QUE ESTA APLICACION TENGA LAS SIGUIENTES FUNCIONALIDADES .

-Formulario de Inscripción donde los pacientes se registren con su número de historial
-alertas que le lleguen al médico como recordatorio de llamar al paciente y revision de su ficha (por mail o sms) estas serian 1 al mes de la inscripción del paciente, otra a los 3 meses y otra al año de seguimiento 

-Lenguajes Utilizados: Java - JavaScript - SCSS - HTML
-Tecnologías y Herramientas - React, JS, Java con SpringBoot, Gradle, npm webpack, postgreSQL, H2, docker, postman, github, trello, slack

-Librerías utilizadas:
                     APP-FA (Dentro de está las carpetas) GRADLE-WEB-CLIENT-SRC

                     Dentro de SRC una carpeta JS  y otra SCSS y un archivo index.html

                     Dentro de JS - apis, components y un main.js

                     Dentro de apis - AlertsApi.jsx y PacientesApi.jsx

                     Dentro de components los archivos, Alerts.jsx-Altas.jsx-App.jsx-Contacto.jsx-DateTime.jsx-Inici.jsx-NavigationBar.jsx-PacienteCard.jsx-Paciente.js

                     Dentro de components una carpeta assets y dentro de esta otra llamada img y dentro de esta las fotos y logos

                     Dentro de SCSS los archivos dateTimePicker.scss y main.scss

                     También agregaremos archivos gitignore
-Instalado Docker

*En archivo AlertsApi.jsx* agregaremos en que puerto veremos que se vea nuestra aplicación

Ej.: return fetch("http://localhost:8080/alerts")

*dentro de assets* en el archivo img agregaremos todas las fotos y logos que utilizamos
Ej.: FA-APP-logo.svg
     hClinic.jpg

*Hacemos comprobaciones del código a través de Test que se encuentra dentro del archivo JAVA en un Controller llamado IntegrationTest*

Ej.:  @Test
public void creaAlertasAutomaticamenteParaUnPaciente() throws Exception {

cuando creamos un paciente
        mockMvc.perform(post("/pacientes").contentType(MediaType.APPLICATION_JSON)
                .content("{ \"fechaRegistro\": \"2022-03-04T10:15:30\", \"nhc\": \"403998\" }"))
                .andExpect(status().isOk());


se crean automáticamente las alertas
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
-Carpeta Config: Encontramos los Controllers FakeDataLoader Y MvcConfig utilizados para insertar y borrar configuraciones 

* Ejemplos : 

    public FakeDataLoader(PacienteRepository pacienteRepository) {
this.pacienteRepository = pacienteRepository;
}

    public class MvcConfig implements WebMvcConfigurer {
}


-Carpeta Controller: Encontramos los controllers AlertsController, FileUploadUtil, PacienteController, utilizados para las funcionalidades de crear alertar (No funcionan)

Ejemplos:     
    public class AlertsController{}

public class FileUploadUtil {}

@DeleteMapping("/pacientes/{id}")
        public ResponseEntity<Paciente> delete(@PathVariable Long id) {
        Paciente paciente = pacienteRepository.findById(id).orElse(null);
        pacienteRepository.deleteById(id);
        return ResponseEntity.ok().body(paciente);

-Carpeta models: Encontramos Alert y Paciente generadores de alertas con LocalDateTime y pacientes a traves de void, long, string, llamados por set y get

Ejemplos: 
            @Table(name="alerts")

public Paciente() {
}

public void setId(Long id) {
        this.id = id;
    }

public Long getId() {
        return id;
    }

public String getNhc() {
        return nhc;
    }

public void setNhc(String nhc) {
        this.nhc = nhc;
    }







Colaboradoras :
https://github.com/clauCampos
https://github.com/IngaD89
https://github.com/pepimartin
https://github.com/MaGa6969
https://github.com/AngieFlower
https://github.com/ranju-ky







                     

