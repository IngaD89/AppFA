package org.factoriaf5.appfa.scheduling;

import org.factoriaf5.appfa.models.Alert;
import org.factoriaf5.appfa.repositories.AlertRepository;
import org.factoriaf5.appfa.services.AlertService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDateTime;
import java.util.List;


@Component
public class ScheduledAlerts {


    private static final Logger log = LoggerFactory.getLogger(ScheduledAlerts.class);
    private AlertService alertService;


    @Autowired
    public ScheduledAlerts( AlertService alertService) {
        this.alertService = alertService;
    }


    @Scheduled(fixedRate = 5000)
       public void showAlerts() {

        LocalDateTime now = LocalDateTime.now();
            List<Alert> alerts= alertService.allAlerts();
            for (Alert alert: alerts){
               if (now.plusDays(2).compareTo(alert.getDateTime()) > 0) {
                   log.info("mandando mail para {}", alert.getDateTime());
               }

            }

        }

    }

