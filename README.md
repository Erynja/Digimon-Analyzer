# Digimon Analyzer

## Description
Have you always wanted Izzy's Laptop? 
If your answer is yes, we both know we don't want it for it's durability - given it not only survived transport into the digi world but on top of all was fully functionable - no matter what! 

No, we know you want the tool on that laptop. That fancy little plugin which can tell Izzy everything he needs to know for their next battles. 

I am of course talking about the Digimon Analyzer and in this special project I build just that. Izzy might know how to create and maintain tunnels into the digi world and back again but can he create his very own digi world? 
I don't know about him, but with this repo you certainly can...

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

1. Download & Install PostgreSQL (required) and pgAdmin4 (optional) at https://www.postgresql.org/
2. Clone the repository: 'git clone git@github.com:Erynja/Digimon-Analyzer.git'
3. Recreate the database following these instructions:
    
    Through Scripts in terminal:
    
    1. LOG into psql shell: 'sudo -iu postgres psql'
    2. CREATE database: 'CREATE DATABASE database_name;'
    3. CREATE tables: '\i /home/usr/projects/TABLE_digimon*.sql'
    4. CREATE procedures: '\i /home/usr/projects/PROCEDURE_*.sql'
    5. LOAD data into database: '\i /home/usr/projects/LOAD_*.sql'
    6. CALL procedure: '\i /home/usr/projects/CALL_post_processing.sql'
    7. TEST: 'SELECT * FROM table_name;'

    You can do the above steps in pgAdmin4 as well. Simply copy the code from the files and let it run through pgAdmin Query Tool. 

    If everything went smoothly, you should have 85 entries in the digimon table.
    There should not be any numbers and only one 'N/A' in the table after processing the data.

    If at any point something went wrong, you can always delete or truncate your tables and repopulate using the method above.

4. To be continued...

## Usage

Here are some of the most useful commands:

- SELECT * FROM table_name; // retrieves everything stored in table_name
- SELECT * FROM author_info WHERE country='USA'; // retrieves all records from the author_info table where the country column equals ‘USA’
- SELECT * FROM authors JOIN books ON authors.id = books.author_id; // combines and retrieves data from the authors and books tables based on the id column

If you need help check out this page:
'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select/'

Also don't forget to RTFM: 
'https://www.postgresql.org/docs/'

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).