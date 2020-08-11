CREATE DATABASE softuni
USE softuni;

CREATE TABLE students (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NULL,
	last_name VARCHAR(50) NULL,
	age INT NULL,
	grade DOUBLE NULL
)

SELECT * FROM students

INSERT INTO students(first_name, last_name, age, grade)
VALUES ('Guy', 'Gilbert', 15, 4.5),
('Kevin', 'Brown', 17, 5.4),
('Roberto', 'Tamburello', 19, 6),
('Linda', 'Smith', 18, 5),
('John', 'Stones', 16, 4.25),
('Nicole', 'Nelson', 17, 5.50);

SELECT last_name, age, grade FROM students

SELECT * FROM students LIMIT 5

SELECT last_name, grade FROM students LIMIT 5

TRUNCATE TABLE students

DROP TABLE students