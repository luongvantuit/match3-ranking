# __Match3 Ranking__

## __Base environment__

__Local__

```shell
yarn install && yarn start
```

__Docker__

```shell
docker-compose up -d --build
```

## __API__

__Score__

- __Score update__

```shell 
curl -X POST -H "Content-Type: application/json" -d '{"score":100,"level":1}' http://localhost:8080/api/score/{uid}
```

- __Get score by uid all level__

```shell 
curl -X GET http://localhost:8080/api/score/{uid}
```

- __Get score by uid__

```shell 
curl -X GET http://localhost:8080/api/score/{uid}/{level}
```

__Ranking__

- __Get ranking with list uid in level__

```shell 
curl -X GET -H "Content-Type: application/json" -d '{"data":["1","2","2323"]}' http://localhost:8080/api/ranking/{level}
```

- __Get ranking in level__

```shell 
curl -X GET http://localhost:8080/api/ranking/{level}
```

__`@github pages`__