import React from 'react'

export class PacientesApi {

    savePaciente(paciente) {
        return fetch("http://localhost:8080/pacientes",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(paciente)
        })
    }
    getPacientes() {
        return fetch("http://localhost:8080/pacientes")
            .then(response => response.json())
    }
}