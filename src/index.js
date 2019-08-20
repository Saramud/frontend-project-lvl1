import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const roundsTotal = 3;

const engine = (getData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const getName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${getName}`);
  const iter = (count) => {
    if (count > roundsTotal) {
      console.log(`\nCongratulations, ${getName}`);
      return;
    }
    const gameData = getData();
    const correctAnswer = cdr(gameData);
    const question = `Question: ${car(gameData)}`;
    console.log(question);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!\n');
      iter(count + 1);
      return;
    }
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer '${correctAnswer}'.`);
    console.log(`Let's try again ${getName}`);
  };
  iter(1);
};
export default engine;
