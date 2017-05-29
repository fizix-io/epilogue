
var _ = require('lodash');

function notSequelizeTypes(Sequelize, value) {
  return value;
  if (value instanceof Sequelize.Model || value instanceof Sequelize.Instance) {
    return value;
  }
}

module.exports = function cloneDeep(data, Sequelize) {
  return _.cloneDeepWith(data, notSequelizeTypes.bind(null, Sequelize));
}
