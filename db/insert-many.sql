-- Insert multiple users --
INSERT INTO user (id, username, email, first_name, last_name, date_joined)
VALUES
    ( 1, 'tlitschgi', 'tlitschgi@att.net', 'Tracey', 'Litschgi', 08-19-2024),
    ( 2, 'TayDeveloping', 'taydeveloping@gmail.com', 'Taylor', 'Tiney', 08-19-2024),
    ( 3, 'Mattw05', 'mattweigandt5@gmail.com', 'Matt', 'Weigandt', 08-19-2024),
    ( 4, 'tleavitt25526', 'tleavitt25526@gmail.com', 'Thomas', 'Leavitt', 08-19-2024)
    ;

-- Select rows from user table  --
SELECT * FROM user;

-- Insert multiple genre --
INSERT INTO genre (id, description)
VALUES
    ( 1, 'Blues'),
    ( 2, 'Country')
    ( 3, 'Disco'),
    ( 4, 'Electronic'),
    ( 5, 'Funk'),
    ( 6, 'Hip hop'),
    ( 7, 'Jazz'),
    ( 8, 'Metal'),
    ( 9, 'Pop'),
    ( 10, 'Punk')
    ( 11, 'R&B'),
    ( 12, 'Rock')
    ;
    
-- Select rows from genre table  --
SELECT * FROM genre;