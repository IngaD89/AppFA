import React from 'react'

export class PacientesApi {


    savePaciente(paciente) {
        return fetch("/pacientes",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(paciente)


        })
    }

    // hace una llamada al backend y convierte el resultado en un JSON
    getPacientes() {
        return fetch("/pacientes")
            .then(response => response.json())
    }
}