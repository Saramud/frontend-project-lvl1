#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countRounds = 3;
const startRound = 1;

const launchEngine = (data, description) => {
  for (let i = 0; i < description.length; i += 1) {
    console.log(`${description[i]}`);
  }
  const getName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${getName}`);
  const launchPlay = (round) => {
    const gameData = data();
    const question = `\nQuestion: ${car(gameData)}\nYour answer: `;
    const correctAnswer = cdr(gameData);
    const playerAnswer = readlineSync.question(question);
    if (playerAnswer === correctAnswer) {
      if (round < countRounds) {
        launchPlay(round + 1);
      } else { console.log(`Congratulations, ${getName}`); }
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer '${correctAnswer}'. Let's try again ${getName}`);
    }
  };
  return launchPlay(startRound);
};

export default launchEngine;
