#!/usr/bin/node
// eslint-disable-next-line import/named
import { coreGame } from '..';
import calcEvenNum from '../games/calcEvenNum';
import calcOperation from '../games/calcOperation';
import evenStatusOfNumber from '../games/evenStatusOfNumber';


console.log('\nWelcome to the Brain Games!!!');
console.log('Answer "yes" if number even otherwise answer "no"');
coreGame(calcEvenNum, evenStatusOfNumber, calcOperation);
