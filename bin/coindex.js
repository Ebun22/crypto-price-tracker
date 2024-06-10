#!/usr/bin/env node

import { program } from 'commander';
import pkg from '../package.json' assert { type: 'json' };;

program
    .version(pkg.version)
    .command('key', 'Manage API key -- https://nomics.com')
    .command('check', 'Check Coin Prices Info')
    .parse(process.argv)
