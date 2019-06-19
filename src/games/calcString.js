#!/usr/bin/node
import { car, cdr } from 'hexlet-pairs';

const calcString = (Numbers) => {
  const str = Numbers();
  return cdr(car(str));
};

export default calcString;
