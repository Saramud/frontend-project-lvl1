#!/usr/bin/node
import { cons } from 'hexlet-pairs';
import generateNumber from './generateNumber';


const calcOperation = () => {
  const x = generateNumber();
  const y = generateNumber();
  const massAr = [`${x} - ${y}`, `${x} + ${y}`, `${x} * ${y}`, `${x}`, `${y}`];
  const genN = Math.floor(Math.random() * 3);
  const pair = cons(x, massAr[genN]);
  const masPair = cons(massAr[3], massAr[4]);
  const thirdP = cons(pair, masPair);
  return thirdP;
};

export default calcOperation;
