const program = require('commander');
const generator = require('./generator');

program
  .option('-l, --length <n>', 'length of password', parseInt)
  .option('-u, --uppercase <n>', 'uppercase letter count', parseInt)
  .option('-d, --digits <n>', 'count of digits', parseInt)
  .option('-s, --special <n>', 'count of special', parseInt)
  .parse(process.argv);

generator.pswCreate(program.length, program.uppercase, program.digits, program.special);
