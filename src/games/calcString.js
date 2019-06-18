#!/usr/bin/node
import { cdr } from 'hexlet-pairs';

const calcString = (Numbers) => {
  const str = Numbers();
  return cdr(str);
};

export default calcString;
