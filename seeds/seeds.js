const sequelize = require('../config/connection');
const { User, Genre, Concert } = require('../models');

const userSeedData = require('./userData.json');
const genreSeedData = require('./genreData.json');
const concertSeedData = require('./concertData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userSeedData);

  const genre = await Genre.bulkCreate(genreSeedData);

  const concert = await Concert.bulkCreate(concertSeedData);

 
  process.exit(0);
};

seedDatabase();
