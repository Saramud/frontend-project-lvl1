#!/usr/bin/node
import { car, cdr, cons } from 'hexlet-pairs';


const nodFunc = (func) => {
  const firstNumber = car(cdr(func()));
  const seconNumber = cdr(cdr(func()));
  const nDel = `${firstNumber} ${seconNumber}`;
  // eslint-disable-next-line consistent-return
  const searchDelitel = (c, b) => {
    // eslint-disable-next-line no-plusplus
    for (let i = b; i >= 1; i--) {
      if (c % i === 0 && b % i === 0) {
        return `${i}`;
      }
    }
  };
  const pairnNodDel = cons(nDel, searchDelitel(firstNumber, seconNumber));
  return pairnNodDel;
};

export default nodFunc;
