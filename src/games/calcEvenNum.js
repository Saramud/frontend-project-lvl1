#!/usr/bin/node
import { car, cons } from 'hexlet-pairs';

const calcEvenNum = (Numbers) => {
  const num = Numbers();
  const evenNumber = car(car(num));
  const evenStatus = (evenNumber % 2 === 0 && evenNumber !== 0) ? 'yes' : 'no';
  const pairEven = cons(evenNumber, evenStatus);
  return pairEven;
};

export default calcEvenNum;
