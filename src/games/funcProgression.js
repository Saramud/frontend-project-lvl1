#!/usr/bin/node
import { car, cons } from 'hexlet-pairs';

const funcProgression = (a) => {
  let firstRandomNumber = car(car(a()));
  const masProgression = [];
  let stringProgression = '';
  const generNumberforDot = Math.floor(Math.random() * 10);
  const generNumberforProgr = Math.floor(Math.random() * 3) + 2;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    masProgression.push(firstRandomNumber += generNumberforProgr);
  }
  const emptyNumber = `${masProgression[generNumberforDot]}`;
  masProgression[generNumberforDot] = '..';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    stringProgression += `${masProgression[i]} `;
  }
  const pairProgress = cons(stringProgression, emptyNumber);
  return pairProgress;
};

export default funcProgression;
