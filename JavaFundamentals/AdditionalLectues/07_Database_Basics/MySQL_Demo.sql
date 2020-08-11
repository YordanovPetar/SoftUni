CREATE DATABASE employees;
USE employees;

CREATE table people (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(40) NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL
);

INSERT INTO `people` (`email`, `first_name`, `last_name`)
VALUES ('b@b.bg', 'John', 'Smith'),
('example@abv.bg', 'George', 'Smith');

INSERT INTO `people` (`email`, `first_name`, `last_name`)
VALUES ('mitko.bg', 'Mitko', 'Mitev'),
('vanko@abv.bg', 'Ivan', 'Ivanov');

SELECT * FROM employees.people;
SELECT `first_name`, `last_name` FROM people;
SELECT * FROM `people` LIMIT 2;

SELECT * FROM `people` WHERE `first_name` = 'Mitko' AND `last_name` = 'Mitev';

UPDATE `people`
SET `last_name` = 'Adams'
WHERE id = 2;

TRUNCATE TABLE `people`;
DROP TABLE `people`;

DROP DATABASE employees;

