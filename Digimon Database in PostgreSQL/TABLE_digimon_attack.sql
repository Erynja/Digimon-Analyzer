-- Table: digimon.attacks

DROP TABLE IF EXISTS digimon.attacks;

CREATE TABLE IF NOT EXISTS digimon.attacks
(
    attack_id character varying(2) COLLATE pg_catalog."default",
    attack_name character varying(30) COLLATE pg_catalog."default",
)

WITH (
    autovacuum_enabled = TRUE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS digimon.attacks
    OWNER to postgres;