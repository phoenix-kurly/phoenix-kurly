const users = require('./users.json');
const data = require('./data.json');


module.exports = () => ({
  users: users,
  data: data,
});