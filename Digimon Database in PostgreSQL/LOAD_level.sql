TRUNCATE digimon.level;

COPY digimon.level
(   level_id
   ,level_name
) FROM 'C:/TEMP/import/level.csv' DELIMITER ';' CSV HEADER ENCODING 'UTF8' QUOTE E'"' ESCAPE '''';