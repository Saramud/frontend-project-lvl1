#!/usr/bin/node
import { car } from 'hexlet-pairs';

const calcEvenNum = (Numbers) => {
  const num = Numbers();
  return car(num);
};

export default calcEvenNum;
