import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const countRounds = 3;

const launchEngine = (getData, description) => {
  console.log(`${car(description)}\n${cdr(description)}`);
  const getName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${getName}`);
  const iter = (round) => {
    const gameData = getData();
    const question = car(gameData);
    const questionPhrase = `Question: ${question}\nYour answer: `;
    const correctAnswer = cdr(gameData);
    const playerAnswer = readlineSync.question(questionPhrase);
    if (playerAnswer === correctAnswer && round < countRounds) {
      console.log('Correct!\n');
      iter(round + 1);
    } else if (playerAnswer === correctAnswer && round === countRounds) {
      console.log(`\nCongratulations, ${getName}`);
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer '${correctAnswer}'.`);
      console.log(`Let's try again ${getName}`);
    }
  };
  return iter(1);
};

export default launchEngine;
