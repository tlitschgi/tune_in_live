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

-- Insert multiple concert rows --
INSERT INTO concert (id, artist, genre_id, venue, city, state, concert_date)
VALUES
    (1, 'Gary Clark Jr', 1, 'Radio City Musis Hall', 'New York', 'NY', 06-11-2024),
    (2, 'Carrie Underwood', 2, 'The Theatre at Resorts World Las Vegas', 'Las Vegas', 'NV', 08-24-2024),
    (3, 'Luke Bryan', 2, 'Wrigley Field', 'Chicago', 'IL', 08-25-2024),
    (4, 'Alex Frankel', 3, 'Concord Music Hall', 'Chicago', 'IL', 10-27-2024),
    (5, 'Disclosure', 4, 'The Midway', 'San Francisco', 'CA', 09-15-2024),
    (6, 'Zedd', 4, 'Brooklyn Navy Yard', 'Brooklyn', 'NY', 09-12-2024),
    (7, 'Cimafunk' 5, 'Santa Fe Railyard Plaza', 'Santa Fe', 'NM', 08-23-2024),
    (8, 'Lil Lotus' 6, 'Moon Room at Summit', 'Denver', 'CO', 08-19-2024),
    (9, 'Chiddy Bang' 6, 'Mercury Lounge', 'New York', 'NY', 08-20-2024),
    (10, 'Conway the Machine' 6, 'Baltimore Soundstage', 'Baltimore', 'MD', 08-22-2024),
    (11, 'Chris Thomas King' 7, 'Snug Harbor Jazz Bistro', 'New Orleans', 'LA', 08-20-2024),
    (12, 'Olivia Rodrigo - GUTS world tour' 9, 'Intuit Dome', 'Inglewood', 'CA', 08-20-2024),
    (13, 'Pitbull: Party After Dark Tour' 9, 'Jiffy Lube Love', 'Bristow', 'VA', 08-21-2024),
    (14, 'MANILOW: The Last Fort Worth Concert' 9, 'Dickies Arena', 'Fort Worth', 'TX', 08-21-2024),
    (15, 'Air Supply' 9, 'Abraham Chavez Theatre', 'El Paso', 'TX', 08-24-2024),
    (16, 'Righteous Brothers' 11, 'Keswick Theatre', 'Glenside', 'PA', 08-20-2024),
    (17, 'USHER: Past Present Future' 11, 'Capital One Arena', 'Washington', 'DC', 08-20-2024),
    (18, 'Diana Ross' 11, 'Mountain Winery', 'Saratoga', 'CA', 08-23-2024),
    (19, 'Boyz II Men' 11, 'The Cosmopolitan of Las Vegas', 'Las Vegas', 'NV', 08-23-2024),
    (20, 'Def Leppard w/ Journey' 12, 'Target Field', 'Minneapolis', 'MN', 08-19-2024),
    (21, 'Night Ranger: Live in Concert' 12, 'The Walker Theatre', 'Chattanooga', 'TN', 08-20-2024),
    (22, 'Melissa Etheridge & Indigo Girls' 12, 'Bethel Woods Center for the Arts', 'Bethel', 'NY', 08-21-2024)
    ;
