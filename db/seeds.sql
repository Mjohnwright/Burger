INSERT INTO burgers (burger_name, devoured)
VALUES ('California Burger', FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ('Jumbo Classic Burger', FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ('VEggie Burger', FALSE);


   id INTEGER(11) AUTO_INCREMENT NOT NULL,
   burger_name VARCHAR(100) NOT NULL,
   devoured BOOLEAN,
   PRIMARY KEY ( id )