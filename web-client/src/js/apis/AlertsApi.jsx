import * as React from "react";

export class AlertsApi {


<<<<<<< HEAD
    getAlerts() {
        return fetch("/alerts")
=======
    getAlertas() {
        return fetch("http://localhost:8080/alerts")
>>>>>>> e1c397ba51ba9944b99d4b6233414fc3cc1cda8b
            .then(response => response.json())
    }
}