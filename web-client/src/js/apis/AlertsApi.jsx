import * as React from "react";

export class AlertsApi {


    getAlerts() {
        return fetch("/alerts")
            .then(response => response.json())
    }
}