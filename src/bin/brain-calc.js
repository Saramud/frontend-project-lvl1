#!/usr/bin/node
import { coreGame } from '..';
import calcString from '../games/calcString';
import calcOperation from '../games/calcOperation';


console.log('\nWelcome to the Brain Games!!!');
console.log('What is the result of the expression?');
coreGame(calcString, calcOperation);
