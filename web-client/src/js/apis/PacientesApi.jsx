export class PacientesApi {

    // hace una llamada al backend y convierte el resultado en un JSON
    getPacientes() {
        return fetch("/pacientes")
            .then(response => response.json())
    }
}