package org.factoriaf5.appfa.models;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="alerts")
public class Alert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime fechaRegistro;
    private LocalDateTime dateTime;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "Alert")
    private List<Paciente> pacientes;

    public Alert() {

    }

    public Alert(LocalDateTime dateTime, List<Paciente> pacientes) {
        this.dateTime = dateTime;
        this.pacientes = pacientes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }


    public LocalDateTime getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(LocalDateTime fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }
}
