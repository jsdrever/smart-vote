const db = require('./connection');
const User = require('../models/User');

db.once('open', async () => {
  
  await User.deleteMany();

  await User.create({
    email: 'test@test.com',
    password: 'password12345',
  });

  await User.create({
    email: 'test2@test.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
