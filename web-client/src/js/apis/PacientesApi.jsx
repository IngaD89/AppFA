import React, { useState }  from 'react'

export class PacientesApi {

    savePacientes(paciente) {
        return fetch("/altas",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: pacientes

        })
    }

    // hace una llamada al backend y convierte el resultado en un JSON
    getPacientes() {
        return fetch("/pacientes")
            .then(response => response.json())
    }
}