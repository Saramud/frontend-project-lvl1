#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const gameEngine = (function1, function2) => {
  const getName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${getName}`);
  const startRound = 1;
  const letsPlay = (countOfRound) => {
    const getPair = function1(function2);
    const dataOnScreen = car(getPair);
    const correctAnswer = cdr(getPair);
    const numberOfRounds = 3;
    const answerOfPlayer = readlineSync.question(`\nQuestion: ${dataOnScreen}\nYour answer: `);
    if (answerOfPlayer === correctAnswer) {
      console.log('Correct!');
      return (countOfRound < numberOfRounds) ? letsPlay(countOfRound + 1) : console.log(`Congratulations, ${getName}`);
    } return console.log(`'${answerOfPlayer}' is wrong answer ;(. Correct answer '${correctAnswer}'. 
    Let's try again ${getName}`);
  };
  letsPlay(startRound);
};

export default gameEngine;
