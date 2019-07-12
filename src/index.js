import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsTotal = 3;

const engine = (getData, description) => {
  console.log('Welcome to the Brain Games!!!');
  console.log(description);
  const getName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${getName}`);
  const iter = (round) => {
    if (round <= roundsTotal) {
      const gameData = getData();
      const correctAnswer = cdr(gameData);
      const question = `Question: ${car(gameData)}`;
      console.log(question);
      const playerAnswer = readlineSync.question('Your answer: ');
      if (playerAnswer === correctAnswer) {
        console.log('Correct!\n');
        iter(round + 1);
      } else {
        console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer '${correctAnswer}'.`);
        console.log(`Let's try again ${getName}`);
      }
    } else {
      console.log(`\nCongratulations, ${getName}`);
    }
  };
  return iter(1);
};
export default engine;
