db.createUser({
    user: 'ethan',
    pwd: 'password',
    roles: [
      {
        role: 'readWrite',
        db: 'example',
      },
    ],
  });
  
  db = db.getSiblingDB('example');
  db.createCollection('soccer_players');
  
  db.soccer_players.insertMany([
   {
      first_name: 'Leo',
      last_name: 'Messi',
      attributes: ['free-kicks','vision','dribbling'],
      address: {
        street: '123 Fake Street',
        city: 'Paris',
        country: 'France'
      }
    },
    {
      first_name: 'Cristiano',
      last_name: 'Ronaldo',
      attributes: ['finishing','heading','clutch'],
      address: {
        street: '123 Fake Street',
        city: 'Manchester',
        country: 'United Kingdom'
      }
    },
    {
      first_name: 'Neymar',
      attributes: ['flair','free-kicks']
    },
    {
      first_name: 'Kylian',
      last_name: 'Mbappe',
      attributes: ['speed','finishing']
    },
    {
      last_name: 'Modric',
      attributes: ['vision','dribbling']
    },
  ]);