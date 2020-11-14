# Express REST API starter
[![Build Status](https://travis-ci.org/jeescu/express-rest-api.svg?style=flat-square)](https://travis-ci.org/jeescu/express-rest-api)
[![bitHound Dependencies](https://www.bithound.io/github/jeescu/express-rest-api/badges/dependencies.svg?style=flat-square)](https://www.bithound.io/github/jeescu/express-rest-api/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/jeescu/express-rest-api/badges/devDependencies.svg?style=flat-square)](https://www.bithound.io/github/jeescu/express-rest-api/master/dependencies/npm)

A REST API boilerplate for NodeJS that uses collections 
of basic practices: Auth, Security, RESTful resources, API docs, Testing and Logging.

> Uses MongoDB as its database and Passport for authentication with (jwt).

## Libraries and tools used
- [Express](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com)
- [Babel (preset 2015)](https://babeljs.io/docs/plugins/preset-es2015/)
- [Passport](https://github.com/jaredhanson/passport)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
- [Mongoose]()
- [SwaggerUI](https://github.com/scottie1984/swagger-ui-express)
- [Morgan](https://github.com/expressjs/morgan), [Helmet](https://github.com/helmetjs/helmet), [Cors](https://github.com/expressjs/cors)
- [Mocha](https://mochajs.org/#getting-started), [Chai](http://chaijs.com/api/), [Supertest](https://github.com/visionmedia/supertest)
- [Winston](https://github.com/winstonjs/winston)
- [Docker](https://www.docker.com/)

### Getting Started
Clone this repository and install dependencies
```
> git clone git@github.com:jeescu/express-rest-api.git
> cd express-rest-api

> npm install
```
#### Run development with nodemon
```
> npm run dev
```

#### Build and run for production 
```
> npm run start
```

#### Tests
Unit tests:
```
> npm run test:specs
```

Black-box end-to-end tests:
```
npm run test:e2e
```

Or run both tests:
```
> npm test
```

#### Lint
```
> npm run lint
```

### Docker support
```
> cd express-rest-api

# Build your docker
> docker build -t rest-api .

# Run your docker image with the tag name
> docker run -p 8080:8080 rest-api
```

### API documentation
Checkout `localhost:8080/docs`.

When using [Apiary](https://apiary.io/), create new project api using swagger and
copy `swagger.json` content to the editor and publish it. See [example](http://docs.expressrestapi.apiary.io).

## Licence
MIT
