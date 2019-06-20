#!/usr/bin/node
import { coreGame } from '..';
import calcOperation from '../games/calcOperation';
import findPrime from '../games/findPrime';


console.log('Welcome to the Brain Games!\nAnswer "yes" if given number is prime. Otherwise answer "no".');
coreGame(findPrime, calcOperation);
