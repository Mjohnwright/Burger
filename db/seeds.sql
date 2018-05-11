INSERT INTO burgers (burger_name, devoured)
VALUES ('California Burger', FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ('Jumbo Classic Burger', FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ('Veggie Burger', FALSE);


INSERT INTO burgers (`burger_name`, devoured, date)
VALUES
    ("California Burger", 0, CURRENT_TIMESTAMP),
    ("Jumbo Classic Burger", 0, CURRENT_TIMESTAMP),
    ("Veggie Burger", 0, CURRENT_TIMESTAMP);

  