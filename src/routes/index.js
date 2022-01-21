const UsersRoute = require('./UsersRoute');
const InscriptionsRoute = require('./InscriptionsRoute');
const ClassesRoute = require('./ClassesRoute');
const LevelsRoute = require('./LevelsRoute');

module.exports = (app) => {
  app.use(
    UsersRoute,
    InscriptionsRoute,
    ClassesRoute,
    LevelsRoute,
  );
};
