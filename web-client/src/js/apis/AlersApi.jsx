import * as React from "react";

export class AlertsApi {


    getAlertas() {
        return fetch("http://localhost:8080/alerts")
            .then(response => response.json())
    }
}