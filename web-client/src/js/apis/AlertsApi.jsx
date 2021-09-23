import * as React from "react";

export class AlertsApi {


    getAlertas() {
        return fetch("alerts")
            .then(response => response.json())
    }
}