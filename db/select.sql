-- Select from genre table
select * FROM genre;

select * from genre
WHERE id = 2;

-- Select from concert table
select * from concert
order by genre_id, concert_date;

select * from concert
where id = 2;

-- Select from post table
select * from post
order by date_updated;