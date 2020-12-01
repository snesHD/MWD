const mariadb = require('mariadb');
const Pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '',
     database: 'todolist',
     connectionLimit: 1
});

module.exports = {
     Pool
};

