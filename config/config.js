var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'principal'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root@localhost:3306/colegio-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'principal'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/colegio-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'principal'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/principal-production'
  }

};

module.exports = config[env];
