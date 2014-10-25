# ShowTrackr

This project is based on <https://github.com/sahat/tvshow-tracker>.

### Deploy this app with [docker](https://www.docker.com/)

* clone [my dockerfiles](https://github.com/t-p/dockerfiles.git) and build a mongodb container

```sh
$ docker build --tag your_id/mongodb - < mongodb.docker
```

* run a mongodb instance

```sh
$ docker run --name mongodb -d -p 27017 your_id/mongodb
```

* build a nodejs container

```sh
$ cp node.docker path/to/showtrackr/Dockerfile
$ cd path/to/showtrackr
$ docker build --tag your_id/nodejs .
```

* run a nodejs instance and link it to mongodb

```sh
$ docker run --name nodejs -d -p 80:3000 --link mongodb:mongodb your_id/nodejs
```

### Troubleshooting

* the alias of the link option (--link name:alias) form the MONGODB_PORT_27017_TCP_ADDR and MONGODB_PORT_27017_TCP_PORT env variables

```js
// this env variables come from docker via --link option
var db_address = process.env.MONGODB_PORT_27017_TCP_ADDR;
var db_port = process.env.MONGODB_PORT_27017_TCP_PORT;
```

* to check available env variables use

```sh
$ docker run --rm --name nodejs --link mongodb:mongodb your_id/nodejs env
```

* you have to wait untill the mongodb container is up and running before starting the nodejs container, check the logs
```sh
$ docker logs mongodb
```
