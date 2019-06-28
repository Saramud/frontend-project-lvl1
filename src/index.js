#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const gameEngine = (data) => {
  console.log(cdr(data()));
  const getName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${getName}`);
  const startRound = 1;
  const play = (round) => {
    const gameData = data();
    const question = car(car(gameData));
    const correctAnswer = cdr(car(gameData));
    const countRounds = 3;
    const playerAnswer = readlineSync.question(`\nQuestion: ${question}\nYour answer: `);
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      const result = (round < countRounds) ? play(round + 1) : console.log(`Congratulations, ${getName}`);
      return result;
    } console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer '${correctAnswer}'. 
    Let's try again ${getName}`);
  };
  return play(startRound);
};

export default gameEngine;
