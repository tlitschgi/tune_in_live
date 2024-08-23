-- Insert row into user table --
INSERT INTO user (id, username, email, first_name, last_name, date_joined)
VALUES
    ( 1, 'tlitschgi', 'tlitschgi@att.net', 'Tracey', 'Litschgi', 08-19-2024)
;

-- Select from user table --
SELECT * FROM user;

-- Insert row into post table --
INSERT INTO post (id, title, text, date_updated, user_id)
VALUES
    ( 2, 'Excited about Def Leapord!',
     'Cannot not wait to go back in time to the eighties and see Def Leapord!',
     '08-20-2024', 'tlitschgi')
;

-- Select from post table --
SELECT * FROM post
where id = 1;
