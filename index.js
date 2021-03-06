// Node v14からimportが使える
import fs from 'fs';
import bowser from 'bowser';
import ltsv from 'ltsv';
import readline from 'readline';

import {ISO8601ToDateTime, uriToAction} from './mymodule.js';

/*
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const bowser = require("bowser");
const ltsv = require('ltsv');
const readline = require('readline');
*/

const rs = fs.createReadStream("./in_file/access.log");
const ws = fs.createWriteStream("./out_file/access.log");
const rl = readline.createInterface({input: rs, output: ws});


rl.on('line', (lineString) => {
  let parsedLine = ltsv.parseLine(lineString);
  let browser = bowser.getParser(parsedLine.useragent);
  // console.log(browser.getResult());
  /*
    { browser: { name: 'Chrome', version: '84.0.4147.105' },
    os:
     { name: 'macOS', version: '10.15.6', versionName: 'Catalina' },
    platform: { type: 'desktop', vendor: 'Apple' },
    engine: { name: 'Blink' } }
  */
  let browsername  = browser.getBrowserName() ? browser.getBrowserName() : '';
  let osname       = browser.getOSName() ? browser.getOSName() : '';
  let platformtype = browser.getPlatformType() ? browser.getPlatformType() : '';

  let time = ISO8601ToDateTime(parsedLine.time);
  let action = uriToAction(parsedLine.request_uri);

  let newLineString = `time:${time}\taction:${action}\tbrowsername:${browsername}\tosname:${osname}\tplatformtype:${platformtype}\n`;

  ws.write(newLineString);
});
rl.on('close', () => {
  console.log("END!");
});
