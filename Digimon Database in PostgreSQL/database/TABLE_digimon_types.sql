-- Table: digimon.types

DROP TABLE IF EXISTS digimon.types;

CREATE TABLE IF NOT EXISTS digimon.types
(
    type_id character varying(2) COLLATE pg_catalog."default" PRIMARY KEY NOT NULL,
    type_name character varying(30) COLLATE pg_catalog."default" NOT NULL
)

WITH (
    autovacuum_enabled = TRUE
)
TABLESPACE pg_default;