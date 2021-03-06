package org.factoriaf5.appfa.models;



import javax.persistence.*;
import java.time.LocalDateTime;



@Entity
@Table(name = "pacientes")
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nhc;
    private String telefono;
    private LocalDateTime pruebaEsfuerzo;
    private LocalDateTime eco;
    private boolean miocardio;
    private boolean consentimiento;
    private String archivo;
    private LocalDateTime fechaRegistro;


    public Paciente(Long id, String nhc, String telefono, LocalDateTime fechaRegistro, boolean miocardio, boolean consentimiento, String archivo) {
        this.id = id;
        this.nhc = nhc;
        this.telefono = telefono;
        this.fechaRegistro = fechaRegistro;
        this.miocardio = miocardio;
        this.consentimiento = consentimiento;
        this.archivo = archivo;
    }

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

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public boolean getConsentimiento() {
        return consentimiento;
    }

    public void setConsentimiento(String consentimiento) {
        this.consentimiento = consentimiento.equals("on");
    }

    public boolean getMiocardio() {
        return miocardio;
    }

    public void setMiocardio(String miocardio) {
        this.miocardio = miocardio.equals("on");
    }


    public String getArchivo() {
        return archivo;
    }

    public void setArchivo(String archivo) {
        this.archivo = archivo;
    }

    @Override
    public String toString() {
        return "Paciente{" +
                "id=" + id +
                ", nhc='" + nhc + '\'' +
                ", telefono='" + telefono + '\'' +
                ", archivo='" + archivo + '\'' +
                '}';
    }



    public LocalDateTime getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(LocalDateTime localDateTime) {

        this.fechaRegistro = localDateTime;
    }

    public LocalDateTime getPruebaEsfuerzo() {
        return pruebaEsfuerzo;
    }

    public void setPruebaEsfuerzo(LocalDateTime pruebaEsfuerzo) {
        this.pruebaEsfuerzo = pruebaEsfuerzo;
    }

    public LocalDateTime getEco() {
        return eco;
    }

    public void setEco(LocalDateTime eco) {
        this.eco = eco;
    }
}
