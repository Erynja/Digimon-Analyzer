-- Table: digimon.level

DROP TABLE IF EXISTS digimon.level;

CREATE TABLE IF NOT EXISTS digimon.level
(
    level_id character varying(2) COLLATE pg_catalog."default" NOT NULL,
    level_name character varying(30) COLLATE pg_catalog."default" NOT NULL
)

WITH (
    autovacuum_enabled = TRUE
)
TABLESPACE pg_default;