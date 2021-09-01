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
    private String consentimiento;
    private String primeraLlamada;
    private String segundaLlamada;
    private String terceraLlamada;
    private String pruebaEsfuerzo;
    private String eco;
    private String archivo;

    public Paciente(Long id, String nhc, String telefono, String consentimiento, String primeraLlamada, String segundaLlamada, String terceraLlamada, String pruebaEsfuerzo, String eco, String archivo) {
        this.id = id;
        this.nhc = nhc;
        this.telefono = telefono;
        this.consentimiento = consentimiento;
        this.primeraLlamada = primeraLlamada;
        this.segundaLlamada = segundaLlamada;
        this.terceraLlamada = terceraLlamada;
        this.pruebaEsfuerzo = pruebaEsfuerzo;
        this.eco = eco;
        this.archivo = archivo;
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


    public String getConsentimiento() {
        return consentimiento;
    }

    public void setConsentimiento(String consentimiento) {
        this.consentimiento = consentimiento;
    }

    public String getPrimeraLlamada() {
        return primeraLlamada;
    }

    public void setPrimeraLlamada(String primeraLlamada) {
        this.primeraLlamada = primeraLlamada;
    }

    public String getSegundaLlamada() {
        return segundaLlamada;
    }

    public void setSegundaLlamada(String segundaLlamada) {
        this.segundaLlamada = segundaLlamada;
    }

    public String getTerceraLlamada() {
        return terceraLlamada;
    }

    public void setTerceraLlamada(String terceraLlamada) {
        this.terceraLlamada = terceraLlamada;
    }

    public String getPruebaEsfuerzo() {
        return pruebaEsfuerzo;
    }

    public void setPruebaEsfuerzo(String pruebaEsfuerzo) {
        this.pruebaEsfuerzo = pruebaEsfuerzo;
    }

    public String getEco() {
        return eco;
    }

    public void setEco(String eco) {
        this.eco = eco;
    }

    public String getArchivo() {
        return archivo;
    }

    public void setArchivo(String archivo) {
        this.archivo = archivo;
    }
}
