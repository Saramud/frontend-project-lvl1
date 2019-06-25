#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const gameEngine = (data) => {
  console.log(cdr(data()));
  const getName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${getName}`);
  const startRound = 1;
  const gaming = (round) => {
    const getData = data();
    const dataOnScreen = car(car(getData));
    const correctAnswer = cdr(car(getData));
    const countRounds = 3;
    const answerOfPlayer = readlineSync.question(`\nQuestion: ${dataOnScreen}\nYour answer: `);
    if (answerOfPlayer === correctAnswer) {
      console.log('Correct!');
      return (round < countRounds) ? gaming(round + 1) : console.log(`Congratulations, ${getName}`);
    } return console.log(`'${answerOfPlayer}' is wrong answer ;(. Correct answer '${correctAnswer}'. 
    Let's try again ${getName}`);
  };
  gaming(startRound);
};

export default gameEngine;
