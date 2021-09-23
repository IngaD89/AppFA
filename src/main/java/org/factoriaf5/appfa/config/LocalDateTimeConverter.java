package org.factoriaf5.appfa.config;

import org.factoriaf5.appfa.models.Paciente;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Converter(autoApply = true)
public class LocalDateTimeConverter extends AttributeConverter<Paciente, LocalDateTime> {
    LocalDateTime localDateTime = LocalDateTime.now();
    ZonedDateTime zonedDateTime = ZonedDateTime.of(localDateTime, ZoneId.of("UTC"));

    @Override
    public LocalDateTime convertToDatabaseColumn(Paciente attribute) {
        return null;
    }

    @Override
    public Paciente convertToEntityAttribute(LocalDateTime dbData) {
        return null;
    }
}
