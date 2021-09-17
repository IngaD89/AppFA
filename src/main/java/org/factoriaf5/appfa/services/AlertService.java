package org.factoriaf5.appfa.services;

import org.factoriaf5.appfa.models.Alert;
import org.factoriaf5.appfa.models.Paciente;
import org.factoriaf5.appfa.repositories.AlertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlertService {

    @Autowired
    private AlertRepository alertRepository;

    public AlertService(AlertRepository alertRepository) {
        this.alertRepository = alertRepository;
    }

    public List<Alert> allAlerts() {
        List<Alert> allAlerts = alertRepository.findAll();
        return allAlerts;
    }

    public void save(Alert alert) {
        alertRepository.save(alert);
    }
    public Alert findById(Long id) {
        return alertRepository.findById(id).orElse(null);
    }
    public void delete(Long id){
        alertRepository.deleteById(id);
    }
}
