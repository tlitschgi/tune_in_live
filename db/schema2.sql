-- Drops the tune_in_db if it exists currently --
DROP DATABASE IF EXISTS tune_in_db;
-- Creates the tune_in_db database --
CREATE DATABASE tune_in_db;

-- Uses the tune_in_db database --
\c tune_in_db;

-- Creates the table "user" within tune_in_db --
CREATE TABLE user (
  -- Creates a numeric column called "id" --
  id INTEGER NOT NULL,
  -- Creates a string column called "username" which can hold up to 50 characters --
  username VARCHAR(50) NOT NULL,
  -- Creates a string column called "email" which can hold up to 50 characters --
  email VARCHAR(50) NOT NULL,
  -- Creates a string column called "first_name" which can hold up to 30 characters --
  first_name  VARCHAR(30) NOT NULL,
  -- Creates a string column called "last_name" which can hold up to 40 characters --
  last_name  VARCHAR(40) NOT NULL,
  -- Creates a string column called "last_name" which can hold up to 40 characters --
  password_hash VARCHAR(255) NOT NULL,
  -- Creates a date column called "date_joinws" which defaults to current timestamp --
  date_joined TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Creates the table "genre" within tune_in_db --
CREATE TABLE genre (
  -- Creates a numeric column called "id" --
  id INTEGER NOT NULL,
  -- Creates a string column called "desc" which can hold up to 30 characters --
  description VARCHAR(30) NOT NULL
);

-- Creates the table "concert" within tune_in_db --
CREATE TABLE concert (
  -- Creates a numeric column called "id" --
  id INTEGER NOT NULL,
  -- Creates a numeric column called "genre_id" --
  FOREIGN KEY (genre_id)
  REFERENCES genre(id)
  ON DELETE SET NULL,
  -- Creates a string column called "artist" which can hold up to 100 characters --
  artist VARCHAR(100) NOT NULL,
  -- Creates a string column called "venue" which can hold up to 100 characters --
  venue VARCHAR(100) NOT NULL,
   -- Creates a string column called "city" which can hold up to 50 characters --
  city VARCHAR(50) NOT NULL,
   -- Creates a string column called "state" which can hold up to 02 characters --
  state VARCHAR(02) NOT NULL,
  -- Creates a date column called "concert_date" --
  concert_date TIMESTAMP NOT NULL
);

-- Creates the table "post" within tune_in_db --
CREATE TABLE post (
  -- Creates a numeric column called "id" --
  id INTEGER NOT NULL,
  -- Creates a string column called "title" which can hold up to 30 characters --
  title VARCHAR(30) NOT NULL,
  -- Creates a string column called "text" which can hold up to 255 characters --
  text TEXT NOT NULL
  -- Creates a numeric column called "genre_id" --
  FOREIGN KEY (genre_id)
  REFERENCES genre(id)
  ON DELETE SET NULL,
  -- Creates a date column called "date_updated" which defaults to current timestamp --
  date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  -- Creates a numeric column called "user_id" --
  FOREIGN KEY (user_id)
  REFERENCES user(id)
  ON DELETE SET NULL,
);