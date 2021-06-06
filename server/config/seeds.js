const db = require('./connection');
const { User, Trade } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  await Trade.deleteMany();

  await Trade.create({
    name: "USDJPY",
    description: "hope is a good thing",
    entryPrice: 120,
    exitPrice: 128,
    sL: 118,
    tP: 128,
    winLose: "Winn"
  })

  console.log('trade seeded')

  process.exit();
});
