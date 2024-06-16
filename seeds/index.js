const sequelize = require('../config');
const seedRoomType = require('./roomTypeData');
const seedRoom = require('./roomData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRoomType();

  await seedRoom();

  process.exit(0);
};

seedAll();
