CREATE DATABASE vuetube;

CREATE TABLE videos (
	id SERIAL PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	url VARCHAR(255) NOT NULL,
	created_at DATE
);


INSERT INTO videos (title, url, created_at) 
VALUES
	('01 - Introdução e Instalação', 'https://www.youtube.com/embed/WahQ5AoXpuU?si=F2FrXqWjB1dtJvGw', '2023-10-15'),
	('02 - Configuração', 'https://www.youtube.com/embed/JbbB84bnPog?si=mKtXqUkTKCuNHqjJ', '2023-10-20'),
	('03 - Pages', 'https://www.youtube.com/embed/S99sVicr8NI?si=jR8Y0QLVVLoQA7mX', '2023-10-10'),
	('04 - Components', 'https://www.youtube.com/embed/cCHWanw49l8?si=i7569DvWVVtto-Ja', '2023-10-05');