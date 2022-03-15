# MongoPlayground
The purpose of this repo is for me to gain familiarity to using MongoDB.

## Getting Set Up
Download and install docker-compose ([here](https://docs.docker.com/compose/install/))
Clone this repository, and cd into it
From the folder of this repo, type `docker-compose up` which will start the docker container with MongoDB inside of it
You should then enter the docker shell. Use `docker ps` to find the id of your docker container, and then type `docker exec -it {YOUR IMAGE ID GOES HERE} /bin/bash`.
Type `mongo` to enter the mongo shell and then `use example` to enter the example database. You then need to authorize with `db.auth("ethan","password")` and you should see '1' to indicate that your authorizaiton was successful.
## Queries
In order to view the "soccer_players" collection type `db.soccer_players.find()`
You can to filter for a single soccer player by name: `db.soccer_players.find({first_name : 'Kylian'})`
To filter for all soccer players with the speed attribute: `db.soccer_players.find({attributes : 'speed'})`
To filter for all soccer players who live on 123 Fake Street (could by any city or country): `db.soccer_players.find({"address.street" : "123 Fake Street"})`
