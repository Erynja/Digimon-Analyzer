-- Table for Pokemon

DROP TABLE IF EXISTS digimon.digimon;
CREATE TABLE digimon.digimon
(
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY      NOT NULL
   ,name                 character varying (30)        NOT NULL
   ,level                character varying (30)		   NOT NULL
   ,type                 character varying (30)        NOT NULL       
   ,attack               character varying (30)        NOT NULL
)WITH ( autovacuum_enabled = TRUE )
    TABLESPACE pg_default;