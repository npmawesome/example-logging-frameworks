var Faker = require('faker');
var winston = require('winston');

winston.info('Example started, press Ctrl+C to stop.');

setInterval(periodical, 500);

function periodical() {
  var level = Faker.random.array_element(['info', 'error']);
  var msg = Faker.Lorem.sentence();
  winston.log(level, msg, {timestamp: Date.now(), pid: process.pid});
}