-- Table for Pokemon

DROP TABLE IF EXISTS digimon.digimon;
CREATE TABLE digimon.digimon
(
    name                 character varying (30)        PRIMARY KEY NOT NULL
   ,level                character varying (30)		   NOT NULL
   ,type                 character varying (30)        NOT NULL       
   ,attack               character varying (30)        NOT NULL
)WITH ( autovacuum_enabled = TRUE )
    TABLESPACE pg_default;