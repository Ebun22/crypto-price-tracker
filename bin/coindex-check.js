import { Command } from 'commander';
import check from '../commands/Check.js';

const program = new Command();

program
    .command('price')
    .description('Check price of coins')
    .option('--coin <ticker>', 'Add specific coin ticker', 'BTC, ETH, SOL')
    .option('--curr <currency>', 'Change the currency', 'USD' )
    .action((cmd) => check.price(cmd))

program.parse(process.argv)