export class PacientesApi {

    savePacientes(paciente) {
        return fetch("/Altas",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: paciente

        })
    }

    // hace una llamada al backend y convierte el resultado en un JSON
    getPacientes() {
        return fetch("/pacientes")
            .then(response => response.json())
    }
}