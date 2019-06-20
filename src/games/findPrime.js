#!/usr/bin/node
import { car, cons } from 'hexlet-pairs';
import calcOperation from './calcOperation';

const findPrime = (Number) => {
  const num = Number();
  const otherNumber = car(car(num)) * (Math.floor(Math.random() * 10) + 1);
  const countP = otherNumber - 1;
  // eslint-disable-next-line no-nested-ternary
  const primeOrNo = (number, count) => ((count === 1) ? 'yes' : (number % count === 0) ? 'no' : primeOrNo(number, count - 1));
  const pairPrime = cons(otherNumber, primeOrNo(otherNumber, countP));
  return pairPrime;
};

findPrime(calcOperation);
export default findPrime;
