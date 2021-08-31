DROP TABLE IF EXISTS pacientes;
CREATE TABLE pacientes (
                       id   BIGSERIAL PRIMARY KEY,
                       nhc VARCHAR(255) NOT NULL,
                       telefono VARCHAR(255) NOT NULL,
                       alertas VARCHAR (255) NOT NULL

);