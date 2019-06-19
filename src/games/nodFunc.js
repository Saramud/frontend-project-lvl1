#!/usr/bin/node
import { cons, car, cdr } from 'hexlet-pairs';
import calcOperation from './calcOperation';


const nodNumbers = (func) => {
  const nDel = `${car(cdr(func()))} ${cdr(cdr(func()))}`;
  return nDel;
};

const nodFunc = (a) => {
  let x = '';
  let y = '';
  for (let i = 0; a[i] !== ' '; i++) {
    x += a[i];
  }
  for (let j = x.length + 1; j < a.length; j++) {
    y += a[j];
  }
  console.log(`${x} ${y}`);
  const searchDelitel = (c, b) => {
    for (let i = b; i >= 1; i--) {
      if (c % i === 0 && b % i === 0) {
        return `${i}`;
      }
    }
  };
  return searchDelitel(x, y);
};

export { nodFunc, nodNumbers };
