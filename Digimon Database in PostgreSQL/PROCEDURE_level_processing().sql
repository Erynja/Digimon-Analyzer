CREATE OR REPLACE PROCEDURE digimon.level_processing()
AS $$
DECLARE

  iNumOfRecord							   integer;
  
  -- Dieser Cursor liefert alle Level
  rec_level record;
  DECLARE cur_level CURSOR FOR
   SELECT level_id
         ,level_name
		 
    FROM digimon.level t
   ORDER BY level_id;

	-- Dieser Cursor liefert alle digimon
  rec_digimon record;
  DECLARE cur_digimon CURSOR FOR
   SELECT  name 
		  ,level		  
          ,type                                              
          ,attack 		  
    FROM digimon.digimon p
	GROUP BY name, level, type, attack
	ORDER BY name;

BEGIN
			
   -- Öffnen des Cursors über alle Datensätze der Tabelle
   iNumOfRecord := 0;
   
   FOR rec_level IN cur_level LOOP	
   iNumOfRecord := iNumOfRecord + 1;

		FOR rec_digimon IN cur_digimon LOOP
		
			 
			 UPDATE digimon.digimon
			 SET level = rec_level.level_name
			 WHERE digimon.level = rec_level.level_id;
			
	    END LOOP;
		  
   END LOOP;       -- Ende der äußeren Schleife
 
END;

$$ LANGUAGE plpgsql;

