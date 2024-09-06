TRUNCATE digimon.types;

COPY digimon.types
(   type_id
   ,type_name
) FROM 'C:/TEMP/import/digimon_types.csv' DELIMITER ';' CSV HEADER ENCODING 'UTF8' QUOTE E'"' ESCAPE '''';