#!/usr/bin/node
// eslint-disable-next-line import/named
import { coreGame } from '..';
import calcOperation from '../games/calcOperation';
import funcProgression from '../games/funcProgression';


console.log('\nWelcome to the Brain Games!!!');
console.log('What number is missing in the progression?');
coreGame(funcProgression, calcOperation);
