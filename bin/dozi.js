#! /usr/bin/env node

var program = require('commander');

program
  .version('0.0.1')
  .option('-v, --version', 'app version', './deploy.conf')
  .option('-p, --peppers', 'Add peppers', './deploy.conf')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.version) console.log('  - 0.0.1');
if (program.peppers) console.log('  - peppers111');
if (program.pineapple) console.log('  - pineapple111');
if (program.bbq) console.log('  - bbq11');
console.log('  - %s cheese', program.cheese);