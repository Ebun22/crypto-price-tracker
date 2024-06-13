#!/usr/bin/env node

import { program } from 'commander';
import pkg from '../package.json' assert { type: 'json' };
import color from 'colors';
import figlet from 'figlet'

    figlet.text(
        "  CRYPTO PRICE TRACKER  ",
        {
            font: 'standard',
            width: 100,
            horizontalLayout: "default",
            verticalLayout: "default",
            whitespacebreak: true,
        },
        function (err, data) {
            if (err) {
              console.log("Something went wrong...");
              console.dir(err);
              return;
            }
            console.log(data.green);
          }
    );

program
    .version(pkg.version)
    .command('key', 'Manage API key -- https://nomics.com')
    .command('check', 'Check Coin Prices Info')
    .parse(process.argv)
