var Faker = require('faker');
var bunyan = require('bunyan');
var logger = bunyan.createLogger({name: 'example'});

logger.info('Example started, press Ctrl+C to stop.');

setInterval(periodical, 500);

function periodical() {
  var periodicalLogger = logger.child({sub: 'periodical'});
  var level = Faker.random.array_element(['trace', 'debug', 'info', 'warn', 'error']);

  periodicalLogger[level]({info: Faker.Lorem.sentence()});
}