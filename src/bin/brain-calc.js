#!/usr/bin/node
import { coreGame } from '..';
import calcString from '../games/calcString';
import calcOperation from '../games/calcOperation';
import calcEval from '../games/calcEval';


console.log('\nWelcome to the Brain Games!!!');
console.log('What is the result of the expression?');
coreGame(calcString, calcEval, calcOperation);
