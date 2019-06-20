#!/usr/bin/node
import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// eslint-disable-next-line import/prefer-default-export
export const questionName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const coreGame = (a, b) => {
  const name = questionName();
  const letsPlay = (i) => {
    const returnPair = a(b);
    const numberOnScreen = car(returnPair);
    const rezultNum = cdr(returnPair);
    const answer = readlineSync.question(`\nQuestion: ${numberOnScreen}\nYour answer: `);
    if (answer === rezultNum) {
      console.log('Correct!');
      return (i < 3) ? letsPlay(i + 1) : console.log(`Congratulations, ${name}`);
    } return console.log(`'${answer}' is wrong answer ;(. Correct answer '${rezultNum}'. 
    Let's try again ${name}`);
  };
  letsPlay(1);
};
