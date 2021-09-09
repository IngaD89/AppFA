export class PacientesApi {

    savePaciente(paciente) {
        return fetch("http://localhost:8080/altas",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(paciente)

        })
    }

    // hace una llamada al backend y convierte el resultado en un JSON
    getPacientes() {
        return fetch("http://localhost:8080/pacientes")
            .then(response => response.json())
    }
}