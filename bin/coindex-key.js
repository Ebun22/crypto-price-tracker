import { Command } from 'commander';
import key from '../commands/key.js';

const program = new Command();

program
    .command('set')
    .description('Set API key -- Get at https://nomics.com')
    .action(key.set)

program
    .command('show')
    .description('Set API key -- Get at https://nomics.com')
    .action(key.show)

program
    .command('remove')
    .description('Set API key -- Get at https://nomics.com')
    .action(key.remove)


program.parse(process.argv)