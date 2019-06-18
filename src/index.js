#!/usr/bin/node
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const questionName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const coreGame = (a, b, c) => {
 // console.log('\nWelcome to the Brain Games!!!');
 // console.log('Answer "yes" if number even otherwise answer "no"');
  const name = questionName();
  const letsPlay = (i) => {
    const numberOnScreen = a(c);
    const rezultNum = b(numberOnScreen);
    const answer = readlineSync.question(`\nQuestion: ${numberOnScreen}\nYour answer: `);
    if (answer === rezultNum) {
      console.log('Correct!');
      return (i < 3) ? letsPlay(i + 1) : console.log(`Congratulations, ${name}`);
    } return console.log(`'${answer}' is wrong answer ;(. Correct answer '${rezultNum}'. 
    Let's try again ${name}`);
  };
  letsPlay(1);
};
