package org.factoriaf5.appfa.controllers;

import org.factoriaf5.appfa.models.Alert;
import org.factoriaf5.appfa.repositories.AlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AlertsController {

    private AlertRepository alertRepository;

    @Autowired
    public AlertsController(AlertRepository alertRepository) {
        this.alertRepository = alertRepository;
    }

    @GetMapping("/alerts")
    public List<Alert> allAlerts() {
        return alertRepository.findAll();
    }
}
