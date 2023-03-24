CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path varchar(280) NOT NULL,
	description varchar(400) NOT NULL,
	likes INTEGER DEFAULT 0
);

INSERT INTO "gallery" ("path", "description")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('images/dog1.jpeg', 'Issa dog.'),
('images/dog2.jpeg', 'Issa dog fr.'),
('images/dog3.jpeg', 'Doge.');