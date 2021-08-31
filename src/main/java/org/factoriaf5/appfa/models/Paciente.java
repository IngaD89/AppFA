package org.factoriaf5.appfa.models;

import javax.persistence.*;

@Entity
@Table(name="pacientes")
public class Paciente {
    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE)
    private Long id;
    private String nhc;
    private String telefono;
    private String alertas;

    public Paciente(Long id, String nhc, String telefono, String alertas) {
        this.id = id;
        this.nhc = nhc;
        this.telefono = telefono;
        this.alertas = alertas;
    }
    public Paciente(){

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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getAlertas() {return alertas; }

    public void setAlertas(String alertas)  {this.alertas = alertas; }
}
