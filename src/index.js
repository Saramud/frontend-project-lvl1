#!/usr/bin/node
import readlineSync from 'readline-sync';
import statusOfNumber from './statusOfNumber';
import generateNumber from './generateNumber';

// eslint-disable-next-line import/prefer-default-export
export const questionName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const evenGame = () => {
  console.log('\nWelcome to the Brain Games!!!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const name = questionName();
  const letsPlay = (i) => {
    const number = generateNumber();
    const statNum = statusOfNumber(number);
    const answer = readlineSync.question(`\nQuestion: ${number}\nYour answer: `);
    if (answer.toUpperCase() === statNum.toUpperCase()) {
      return (i < 3) ? letsPlay(i+1) : console.log(`Congratulations, ${name}`);
    } return console.log(`'${answer}' is wrong answer ;(. Correct answer '${statNum}'. 
    Let's try again ${name}`);
  };
  letsPlay(1);
};
