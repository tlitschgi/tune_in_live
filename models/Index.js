const User = require('./User');
const Genre = require('./Genre');
const Concert = require('./Concert');
const Post = require('./Post');

// Define a Genre as having many Concerts, thus creating a foreign key in the `Concert` table
Genre.hasMany(Concert, {
  foreignKey: 'genre_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Concert side
Concert.belongsTo(Genre, {
  foreignKey: 'genre_id',
});

// Define a Concert as having many Posts, thus creating a foreign key in the `Post` table
Concert.hasMany(Post, {
  foreignKey: 'concert_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Post side
Post.belongsTo(Concert, {
  foreignKey: 'concert_id',
});

// Define a User as having many Posts, thus creating a foreign key in the `Post` table
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Post side
Post.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Genre, Concert, Post };
