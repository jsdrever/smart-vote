const db = require('./connection');
// const User = require('../models/User');
const Senator = require('../models/Senator');

db.once('open', async () => {
  
//   await User.deleteMany();
  await Senator.deleteMany();

//   await User.create({
//     email: 'test@test.com',
//     password: 'password12345',
//   });

//   await User.create({
//     email: 'test2@test.com',
//     password: 'password12345'
//   });

  await Senator.create({
    firstName: 'Katie',
    lastName: 'Britt',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Katie_Britt_%28cropped%29.jpg/190px-Katie_Britt_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Tommy',
    lastName: 'Tuberville',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tommy_Tuberville_official_portrait_%28cropped%29.jpg/189px-Tommy_Tuberville_official_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });


  console.log('senators seeded');

  process.exit();
});
