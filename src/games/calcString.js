#!/usr/bin/node
import { car, cdr, cons } from 'hexlet-pairs';
import calcOperation from './calcOperation';

const calcString = (Numbers) => {
  const str = Numbers();
  const stringPrimer = cdr(car(str));
  const stringRezult = `${eval(stringPrimer)}`;
  const pairCalc = cons(stringPrimer, stringRezult);
  return pairCalc;
};

export default calcString;
