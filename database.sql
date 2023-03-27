-- Run only table create and insert, others were for testing

DROP TABLE gallery;

CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path varchar(500) NOT NULL,
	description varchar(400) NOT NULL,
	likes INTEGER DEFAULT 0
);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/cinder.jpg', 'The cutest dog there is (objectively)', 1000000),
('images/dog1.jpeg', 'Issa dog.', 50),
('images/dog2.jpeg', 'Issa dog fr.', 10),
('images/dog3.jpeg', 'Doge.', 20);

UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = 1;