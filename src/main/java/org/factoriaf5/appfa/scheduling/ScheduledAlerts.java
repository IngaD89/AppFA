package org.factoriaf5.appfa.scheduling;

import org.factoriaf5.appfa.models.Alert;
import org.factoriaf5.appfa.models.Paciente;
import org.factoriaf5.appfa.repositories.PacienteRepository;
import org.factoriaf5.appfa.services.AlertService;
import org.factoriaf5.appfa.services.EmailSenderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Component
public class ScheduledAlerts {


    private static final Logger log = LoggerFactory.getLogger(ScheduledAlerts.class);
    private AlertService alertService;
    private EmailSenderService senderService;
    private PacienteRepository pacienteRepository;


    @Autowired
    public ScheduledAlerts(AlertService alertService, EmailSenderService senderService, PacienteRepository pacienteRepository) {
        this.alertService = alertService;
        this.senderService = senderService;
        this.pacienteRepository = pacienteRepository;
    }


//    @Scheduled(fixedRate = 5000)
    @EventListener(ApplicationReadyEvent.class)
    public void showAlerts() {

        LocalDateTime now = LocalDateTime.now();
        List<Alert> alerts = alertService.allAlerts();
        for (Alert alert : alerts) {
            if (now.plusDays(2).compareTo(alert.getDateTime()) > 0) {
                Optional<Paciente> paciente = pacienteRepository.findByNhc(alert.getNhc());
                if (paciente.isPresent()) {
                    senderService.sendEmail("to@example.com",
                            "alert",
                            "paciente " + alert.getNhc() + "tiene una visita el dia " + alert.getDateTime());
                }


            }

        }

    }
}

