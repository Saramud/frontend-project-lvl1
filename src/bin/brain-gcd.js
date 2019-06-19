#!/usr/bin/node
// eslint-disable-next-line import/named
import { coreGame } from '..';
import calcOperation from '../games/calcOperation';
import { nodFunc, nodNumbers } from '../games/nodFunc';

console.log('\nWelcome to the Brain Games!!!');
console.log('Find the greatest common divisor of given numbers.');
coreGame(nodNumbers, nodFunc, calcOperation);
