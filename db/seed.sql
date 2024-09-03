DROP TABLE IF EXISTS views;
DROP TABLE IF EXISTS clicked;

CREATE TABLE views (
  id SERIAL PRIMARY KEY,
  view_count INTEGER NOT NULL DEFAULT NULL
);

CREATE TABLE clicked (
  viewer INTEGER NOT NULL DEFAULT NULL,
  view_type VARCHAR(13) NOT NULL DEFAULT NULL,
  view_location VARCHAR(100) NOT NULL DEFAULT NULL
);

insert into views (view_count) values (0) returning *;

