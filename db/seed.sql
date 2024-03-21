DROP TABLE IF EXISTS views;

CREATE TABLE views (
  id SERIAL PRIMARY KEY,
  view_count INTEGER NOT NULL DEFAULT NULL
);

insert into views (view_count) values (0) returning *;

