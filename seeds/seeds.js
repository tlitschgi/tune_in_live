const sequelize = require('../config/connection');
const { User, Genre, Concert, Post, Bookmark } = require('../models');

const userSeedData = require('./userData.json');
const genreSeedData = require('./genreData.json');
const concertSeedData = require('./concertData.json');
const postSeedData = require('./postData.json');
const bookmarkSeedData = require('./bookmarkData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userSeedData);

  const genre = await Genre.bulkCreate(genreSeedData);

  const concert = await Concert.bulkCreate(concertSeedData);

  const post = await Post.bulkCreate(postSeedData);

  const bookmark = await Bookmark.bulkCreate(bookmarkSeedData);

  process.exit(0);
};

seedDatabase();
