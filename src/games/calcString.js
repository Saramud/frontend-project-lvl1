#!/usr/bin/node
import { car, cdr, cons } from 'hexlet-pairs';

const calcString = (Numbers) => {
  const str = Numbers();
  const stringPrimer = cdr(car(str));
  // eslint-disable-next-line no-eval
  const stringRezult = `${eval(stringPrimer)}`;
  const pairCalc = cons(stringPrimer, stringRezult);
  return pairCalc;
};

export default calcString;
