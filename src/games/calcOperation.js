#!/usr/bin/node
import { cons } from 'hexlet-pairs';
import generateNumber from './generateNumber';


const calcOperation = () => {
  let x = generateNumber();
  let y = generateNumber();
  if (x < y) {
    const replace = x;
    x = y;
    y = replace;
  }
  const massAr = [`${x} - ${y}`, `${x} + ${y}`, `${x} * ${y}`];
  const genN = Math.floor(Math.random() * 3);
  const pair = cons(x, massAr[genN]);
  return pair;
};

export default calcOperation;
