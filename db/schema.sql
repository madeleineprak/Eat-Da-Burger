-- Create burgers table

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);