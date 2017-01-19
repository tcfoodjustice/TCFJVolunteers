CREATE TABLE Volunteers ( volunteer_id INT NOT NULL AUTO_INCREMENT, volunteer_name VARCHAR(100) NOT NULL, created_date DATE, PRIMARY KEY (volunteer_id), UNIQUE (volunteer_name)

);

insert into Volunteers (volunteer_name , created_date ) values ("Alec Larsen", curdate());
insert into Volunteers (volunteer_name , created_date ) values ("Andrew Larsen", curdate());