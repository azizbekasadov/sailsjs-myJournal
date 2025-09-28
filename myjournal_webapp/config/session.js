/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

const MongoStore = require('connect-mongo');

module.exports.session = {
  secret: process.env.SESSION_SECRET || 'd4519261ac544e564bec1b53a3fa5c34',
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/myjournal',
    collectionName: 'sessions',
    ttl: 14 * 24 * 60 * 60, // seconds, optional
    autoRemove: 'native'
  }),
  url: 'mongodb://lbta.lbta111@ds151007.mlab.com:51007/myjournallbta',
  collection: 'sessions',
  session: {
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    secure: true
  }
}
};
