require('dotenv').config();
require('colors');

const PORT = process.env.SERVER_PORT || 5001;
const HOSTNAME = process.env.HOSTNAME;
const SECRET_KEY = process.env.SECRET_KEY || 'secret-dev';

console.log('========================================');
console.log('DevAlley config: '.green);
console.log('SECRET_KEY'.yellow, SECRET_KEY);
console.log('HOSTNAME: '.yellow, HOSTNAME);
console.log('PORT: '.yellow, PORT);
console.log('========================================');

module.exports = {
  PORT,
  HOSTNAME,
  SECRET_KEY,
};
