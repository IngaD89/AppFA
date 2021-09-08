DROP TABLE IF EXISTS pacientes;
CREATE TABLE pacientes (
                       id   BIGSERIAL PRIMARY KEY,
                       nhc VARCHAR(255) NOT NULL,
                       telefono VARCHAR(255) NOT NULL,
                       primeraLLamada VARCHAR (255) NOT NULL,
                       segundaLLamada VARCHAR (255) NOT NULL,
                       terceraLLamada VARCHAR (255) NOT NULL,
                       pruebaEsfuerzo VARCHAR (255) NOT NULL,
                       eco VARCHAR (255) NOT NULL,
                       miocardio VARCHAR (255) NOT NULL,
                       consentimiento VARCHAR (255) NOT NULL,
                       archivo VARCHAR (64) NOT NULL


);




