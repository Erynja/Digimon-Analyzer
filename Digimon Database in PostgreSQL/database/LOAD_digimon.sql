TRUNCATE digimon.digimon;
COPY digimon.digimon
(   name
   ,level
   ,type  
   ,attack  
) FROM 'C:/TEMP/import/digimon.csv' DELIMITER ';' CSV HEADER ENCODING 'UTF8' QUOTE E'"' ESCAPE '''';