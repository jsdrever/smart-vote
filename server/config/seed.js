const db = require('./connection');
const User = require('../models/User');
const Senator = require('../models/Senator');

db.once('open', async () => {
  
  await User.deleteMany();
  await Senator.deleteMany();

  await User.create({
    email: 'test@test.com',
    password: 'password12345',
  });

  await User.create({
    email: 'test2@test.com',
    password: 'password12345'
  });

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
  await Senator.create({
    firstName: 'Lisa',
    lastName: 'Murkowski',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lisa_Murkowski_official_photo_%28cropped%29.jpg/190px-Lisa_Murkowski_official_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Lisa',
    lastName: 'Murkowski',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lisa_Murkowski_official_photo_%28cropped%29.jpg/190px-Lisa_Murkowski_official_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Dan',
    lastName: 'Sullivan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Senator_Dan_Sullivan_official_%28cropped%29.jpg/190px-Senator_Dan_Sullivan_official_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Kyrsten',
    lastName: 'Sinema',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kyrsten_Sinema_%28cropped%29.jpg/190px-Kyrsten_Sinema_%28cropped%29.jpg',
    PartyAffiliation: 'Independent'
  });
  await Senator.create({
    firstName: 'Mark',
    lastName: 'Kelly',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Mark_Kelly%2C_Official_Portrait_117th_%28cropped%29.jpg/190px-Mark_Kelly%2C_Official_Portrait_117th_%28cropped%29.jpg',
    PartyAffiliation: 'Democrate'
  });
  await Senator.create({
    firstName: 'John',
    lastName: 'Boozman',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Senator_John_Boozman_Official_Portrait_%28115th_Congress%29_%28cropped%29.jpg/190px-Senator_John_Boozman_Official_Portrait_%28115th_Congress%29_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Tom',
    lastName: 'Cotton',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tom_Cotton_official_Senate_photo_%28cropped%29.jpg/190px-Tom_Cotton_official_Senate_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Lisa',
    lastName: 'Murkowski',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Lisa_Murkowski_official_photo_%28cropped%29.jpg/190px-Lisa_Murkowski_official_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Alex',
    lastName: 'Padilla',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Alex_Padilla_117th_Congress_portrait_%283%29_%28crop%29.jpg/189px-Alex_Padilla_117th_Congress_portrait_%283%29_%28crop%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Dianne',
    lastName: 'Feinstein',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Dianne_Feinstein%2C_official_Senate_photo_2_%28cropped%29.jpg/190px-Dianne_Feinstein%2C_official_Senate_photo_2_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'John',
    lastName: 'Hickenlooper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/John_Hickenlooper%2C_official_portrait%2C_117th_Congress_%28cropped%29.jpeg/190px-John_Hickenlooper%2C_official_portrait%2C_117th_Congress_%28cropped%29.jpeg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Michael',
    lastName: 'Bennet',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Senator_Mike_Bennett_%28cropped%29_2.jpg/190px-Senator_Mike_Bennett_%28cropped%29_2.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Chris',
    lastName: 'Murphy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chris_Murphy%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/190px-Chris_Murphy%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Richard',
    lastName: 'Blumenthal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Richard_Blumenthal_Official_Portrait_%28cropped%29.jpg/190px-Richard_Blumenthal_Official_Portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Chris',
    lastName: 'Coons',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Chris_Coons%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg/190px-Chris_Coons%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Tom',
    lastName: 'Carper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tom_Carper%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg/190px-Tom_Carper%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Rick',
    lastName: 'Scott',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Official_Portrait_of_Senator_Rick_Scott_%28cropped%29.jpg/190px-Official_Portrait_of_Senator_Rick_Scott_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Marco',
    lastName: 'Rubio',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Senator_Rubio_official_portrait_%28cropped%29.jpg/190px-Senator_Rubio_official_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'John',
    lastName: 'Ossoff',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jon_Ossoff_Senate_Portrait_2021_%28cropped%29.jpg/190px-Jon_Ossoff_Senate_Portrait_2021_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Raphael',
    lastName: 'Warnock',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Raphael_Warnock_official_photo_%28cropped%29.jpg/190px-Raphael_Warnock_official_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Brian',
    lastName: 'Schatz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Brian_Schatz%2C_official_portrait%2C_113th_Congress_2_%28cropped%29.jpg/190px-Brian_Schatz%2C_official_portrait%2C_113th_Congress_2_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Mazie',
    lastName: 'Hirono',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Mazie_Hirono%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/190px-Mazie_Hirono%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Jim',
    lastName: 'Risch',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jim_Risch_official_portrait_%28cropped%29.jpg/190px-Jim_Risch_official_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Mike',
    lastName: 'Crapo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mike_Crapo_2019_%28cropped%29.jpg/190px-Mike_Crapo_2019_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Dick',
    lastName: 'Durbin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Dick_Durbin_2022_official_portrait_%28cropped%29_2.jpg/190px-Dick_Durbin_2022_official_portrait_%28cropped%29_2.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Tammy',
    lastName: 'Duckworth',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Tammy_Duckworth_115th_official_portrait_%28cropped%29.jpg/190px-Tammy_Duckworth_115th_official_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Mike',
    lastName: 'Braun',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Mike_Braun%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg/190px-Mike_Braun%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Todd',
    lastName: 'Young',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Sen._Todd_Young_official_photo_%28cropped%29.jpg/190px-Sen._Todd_Young_official_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Chuck',
    lastName: 'Grassley',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Chuck_Grassley_official_photo_2017_%28cropped%29.jpg/190px-Chuck_Grassley_official_photo_2017_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Joni',
    lastName: 'Ernst',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Joni_Ernst%2C_official_portrait%2C_116th_Congress_3_%28cropped%29.jpg/190px-Joni_Ernst%2C_official_portrait%2C_116th_Congress_3_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Jerry',
    lastName: 'Moran',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Jerry_Moran%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg/190px-Jerry_Moran%2C_official_portrait%2C_112th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Roger',
    lastName: 'Marshall',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Roger_Marshall_117th_Congress_portrait_%28cropped%29.jpg/190px-Roger_Marshall_117th_Congress_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Mitch',
    lastName: 'McConnell',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Mitch_McConnell_portrait_2016.jpg/190px-Mitch_McConnell_portrait_2016.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Rand',
    lastName: 'Paul',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Rand_Paul%2C_official_portrait%2C_112th_Congress_alternate_%28cropped%29.jpg/190px-Rand_Paul%2C_official_portrait%2C_112th_Congress_alternate_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Bill',
    lastName: 'Cassidy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bill_Cassidy_official_Senate_photo_%28cropped%29.jpg/190px-Bill_Cassidy_official_Senate_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'John',
    lastName: 'Kennedy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/John_Neely_Kennedy%2C_official_portrait%2C_115th_Congress.jpg/189px-John_Neely_Kennedy%2C_official_portrait%2C_115th_Congress.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Angus',
    lastName: 'King',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Angus_King%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/190px-Angus_King%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Independent'
  });
  await Senator.create({
    firstName: 'Susan',
    lastName: 'Collins',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Senator_Susan_Collins_2014_official_portrait_%28cropped%29.jpg/190px-Senator_Susan_Collins_2014_official_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Ben',
    lastName: 'Cardin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ben_Cardin_official_Senate_portrait_%28cropped%29.jpg/190px-Ben_Cardin_official_Senate_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Chris',
    lastName: 'Van Hollen',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Chris_Van_Hollen_official_portrait_115th_Congress_%28cropped%29.jpg/190px-Chris_Van_Hollen_official_portrait_115th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Ed',
    lastName: 'Markey',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Edward_Markey%2C_official_portrait%2C_114th_Congress_%28cropped%29.jpg/190px-Edward_Markey%2C_official_portrait%2C_114th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Debbie',
    lastName: 'Stabenow',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Debbie_Stabenow%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg/190px-Debbie_Stabenow%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Elizabeth',
    lastName: 'Warren',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Elizabeth_Warren--2016_Official_Portrait--%28cropped%29.jpg/190px-Elizabeth_Warren--2016_Official_Portrait--%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Gary',
    lastName: 'Peters',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Gary_Peters_official_photo_115th_congress_%28cropped%29.jpg/190px-Gary_Peters_official_photo_115th_congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Amy',
    lastName: 'Klobuchar',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/190px-Amy_Klobuchar%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Tina',
    lastName: 'Smith',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Tina_Smith%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg/190px-Tina_Smith%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'John',
    lastName: 'Kennedy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/John_Neely_Kennedy%2C_official_portrait%2C_115th_Congress.jpg/189px-John_Neely_Kennedy%2C_official_portrait%2C_115th_Congress.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Cindy',
    lastName: 'Hyde-Smith',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Official_headshot_of_US_Senator_Cindy_Hyde-Smith_%28cropped%29.jpg/190px-Official_headshot_of_US_Senator_Cindy_Hyde-Smith_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Roger',
    lastName: 'Wicker',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Roger_F._Wicker_crop.jpg/190px-Roger_F._Wicker_crop.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Eric',
    lastName: 'Schmitt',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Eric_Schmitt_official_photo_%28cropped%29.jpg/190px-Eric_Schmitt_official_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Josh',
    lastName: 'Hawley',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Josh_Hawley%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg/190px-Josh_Hawley%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Jon',
    lastName: 'Tester',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/JonTester_%28cropped%29.jpg/190px-JonTester_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Steve',
    lastName: 'Daines',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Steve_Daines%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg/190px-Steve_Daines%2C_Official_Portrait%2C_116th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Deb',
    lastName: 'Fischer',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Deb_Fischer%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg/190px-Deb_Fischer%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Pete',
    lastName: 'Rickets',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sen._Pete_Ricketts_official_portrait%2C_118th_Congress_%28cropped%29.jpg/190px-Sen._Pete_Ricketts_official_portrait%2C_118th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Catherine',
    lastName: 'Cortez Masto',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Catherine_Cortez_Masto_portrait_red_%28cropped%29.jpg/190px-Catherine_Cortez_Masto_portrait_red_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Jacky',
    lastName: 'Rosen',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Jacky_Rosen%2C_official_portrait%2C_116th_congress_%28cropped-1%29.jpg/190px-Jacky_Rosen%2C_official_portrait%2C_116th_congress_%28cropped-1%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Maggie',
    lastName: 'Hassan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Maggie_Hassan%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg/190px-Maggie_Hassan%2C_official_portrait%2C_115th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Jeanne',
    lastName: 'Shaheen',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Shaheen_Senate_Portrait.jpg/190px-Shaheen_Senate_Portrait.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Cory',
    lastName: 'Booker',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg/190px-Cory_Booker%2C_official_portrait%2C_114th_Congress.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Bob',
    lastName: 'Menendez',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Senator_Bob_Menendez_%282022%29_%28cropped%29.jpg/190px-Senator_Bob_Menendez_%282022%29_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Ben',
    lastName: 'Ray Lujan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ben_Ray_Lujan%2C_117th_Congress_portrait_2_%28cropped%29.jpg/190px-Ben_Ray_Lujan%2C_117th_Congress_portrait_2_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Martin',
    lastName: 'Heinrich',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Heinrich_Official_Headshot_2019_%28cropped%29.jpg/190px-Heinrich_Official_Headshot_2019_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Chuck',
    lastName: 'Schumer',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Chuck_Schumer_official_photo_%28cropped%29.jpg/190px-Chuck_Schumer_official_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Kirsten',
    lastName: 'Gillibrand',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kirsten_Gillibrand%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg/190px-Kirsten_Gillibrand%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Thom',
    lastName: 'Tillis',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Sen._Thom_Tillis_official_photo_%28cropped%29.jpg/190px-Sen._Thom_Tillis_official_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Ted',
    lastName: 'Budd',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Senator_Ted_Budd_official_portrait_%28cropped_2%29.jpg/201px-Senator_Ted_Budd_official_portrait_%28cropped_2%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'John',
    lastName: 'Cornyn',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/John_Cornyn_%28cropped%29.jpg/190px-John_Cornyn_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'John',
    lastName: 'Hoeven',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Hoeven_Official_Portrait_2014_%28cropped%29.JPG/190px-Hoeven_Official_Portrait_2014_%28cropped%29.JPG',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Kevin',
    lastName: 'Cramer',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Kevin_Cramer%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg/190px-Kevin_Cramer%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'JD',
    lastName: 'Vance',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Senator_Vance_official_portrait._118th_Congress_%28cropped%29.jpg/190px-Senator_Vance_official_portrait._118th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Sherrod',
    lastName: 'Brown',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Sherrod_Brown_117th_Congress_%282%29_%28cropped%29.jpg/190px-Sherrod_Brown_117th_Congress_%282%29_%28cropped%29.jpg',
    PartyAffiliation: 'Denocrat'
  });
  await Senator.create({
    firstName: 'James',
    lastName: 'Lankford',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/James_Lankford_official_Senate_photo_%28cropped%29.jpg/190px-James_Lankford_official_Senate_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Markwayne',
    lastName: 'Mullen',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Markwayne_Mullin_official_Senate_photo_%28cropped%29.jpg/190px-Markwayne_Mullin_official_Senate_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Jeff',
    lastName: 'Merkley',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Jeff_Merkley%2C_115th_official_photo_%28cropped%29.jpg/190px-Jeff_Merkley%2C_115th_official_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Ron',
    lastName: 'Wyden',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ron_Wyden_117th_Congress_%28cropped%29.jpeg/190px-Ron_Wyden_117th_Congress_%28cropped%29.jpeg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Bob',
    lastName: 'Casey Jr',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Bob_Casey_Jr._official_photo_%28cropped%29.jpg/190px-Bob_Casey_Jr._official_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Democratic'
  });
  await Senator.create({
    firstName: 'John',
    lastName: 'Fetterman',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/John_Fetterman_official_portrait_%283x4%29.jpg/190px-John_Fetterman_official_portrait_%283x4%29.jpg',
    PartyAffiliation: 'Democratic'
  });
  await Senator.create({
    firstName: 'Jack',
    lastName: 'Reed',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Senator_Jack_Reed_official_photo_%28cropped%29.jpg/190px-Senator_Jack_Reed_official_photo_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Sheldon',
    lastName: 'Whitehouse',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Sheldon_Whitehouse%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg/190px-Sheldon_Whitehouse%2C_official_portrait%2C_116th_congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Tim',
    lastName: 'Scott',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tim_Scott%2C_official_portrait%2C_113th_Congress_%28cropped_2%29.jpg/190px-Tim_Scott%2C_official_portrait%2C_113th_Congress_%28cropped_2%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Linsey',
    lastName: 'Graham',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/U.S._Senator_Lindsey_Graham%2C_Official_Photo%2C_113th_Congress_%28cropped%29.jpg/190px-U.S._Senator_Lindsey_Graham%2C_Official_Photo%2C_113th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'John',
    lastName: 'Thune',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/John_Thune_117th_Congress_portrait_%28cropped%29.jpg/190px-John_Thune_117th_Congress_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'John',
    lastName: 'Cornyn',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/John_Cornyn_%28cropped%29.jpg/190px-John_Cornyn_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Mike',
    lastName: 'Rounds',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mike_Rounds_official_Senate_portrait_%28cropped%29.jpg/190px-Mike_Rounds_official_Senate_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Marsha',
    lastName: 'Blackburn',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Marsha_Blackburn%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg/186px-Marsha_Blackburn%2C_official_photo%2C_116th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Bill',
    lastName: 'Hagerty',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sen._Bill_Hagerty_official_Senate_portrait%2C_117th_Congress_%28cropped%29.jpg/190px-Sen._Bill_Hagerty_official_Senate_portrait%2C_117th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Ted',
    lastName: 'Cruz',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ted_Cruz_official_116th_portrait_%28cropped%29.jpg/190px-Ted_Cruz_official_116th_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Mike',
    lastName: 'Lee',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mike_Lee%2C_official_portrait_%28cropped%29.jpg/190px-Mike_Lee%2C_official_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Mitt',
    lastName: 'Romney',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Mitt_Romney_official_US_Senate_portrait_%28cropped%29.jpg/190px-Mitt_Romney_official_US_Senate_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Bernie',
    lastName: 'Sanders',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bernie_Sanders_%28cropped%29.jpg/190px-Bernie_Sanders_%28cropped%29.jpg',
    PartyAffiliation: 'Independent'
  });
  await Senator.create({
    firstName: 'Peter',
    lastName: 'Welch',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/John_Cornyn_%28cropped%29.jpg/190px-John_Cornyn_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Tim',
    lastName: 'Kaine',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tim_Kaine_116th_official_portrait_%28cropped%29.jpg/190px-Tim_Kaine_116th_official_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Maria',
    lastName: 'Cantwell',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Maria_Cantwell_%28cropped%29.jpg/190px-Maria_Cantwell_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Patty',
    lastName: 'Murray',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Patty_Murray%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/190px-Patty_Murray%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Joe',
    lastName: 'Manchin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Senator_Manchin_%28cropped%29.jpg/190px-Senator_Manchin_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Shelley',
    lastName: 'Moore Capito',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Shelley_Moore_Capito_official_Senate_photo_%28cropped_2%29.jpg/190px-Shelley_Moore_Capito_official_Senate_photo_%28cropped_2%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Ron',
    lastName: 'Johnson',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ron_Johnson_portrait_117th_Congress_%28cropped%29.jpg/190px-Ron_Johnson_portrait_117th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'Tammy',
    lastName: 'Baldwin',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Tammy_Baldwin%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg/190px-Tammy_Baldwin%2C_official_portrait%2C_113th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Tim',
    lastName: 'Kaine',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tim_Kaine_116th_official_portrait_%28cropped%29.jpg/190px-Tim_Kaine_116th_official_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Democrat'
  });
  await Senator.create({
    firstName: 'Cynthia',
    lastName: 'Lummis',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tim_Kaine_116th_official_portrait_%28cropped%29.jpg/190px-Tim_Kaine_116th_official_portrait_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });
  await Senator.create({
    firstName: 'John',
    lastName: 'Barrasso',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/John_Barrasso_official_portrait_112th_Congress_%28cropped%29.jpg/190px-John_Barrasso_official_portrait_112th_Congress_%28cropped%29.jpg',
    PartyAffiliation: 'Republican'
  });


  console.log('users seeded');

  process.exit();
});
