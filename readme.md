# Simple load balancer

## Use case

I needed a method of testing a number of applications running under a single load balancer.

## Install

```
npm i
```

## Set up

Create a `config.json` file. Example:

```
{
  "port": 3000,
  "default": "http://localhost:3001",
  "urls": {
    "http://localhost:3002": ["/somepath", "/anotherpath"]
  }
}
```

In this example, the application runs over port 3000.

By default it serves requests from http://localhost:3001.

It will serve from other URLs if the path is included in the configured array.

## Run

Included is a script to run two basic apps for testing:

```
npm run start:dev
```

Otherwise, to run with your own configured applications use:

```
npm start
```
