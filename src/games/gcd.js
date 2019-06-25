import { cons } from 'hexlet-pairs';
import randomGeneration from '../generationData';
import { gameEngine } from '../index';

const gcd = () => {
  const getDataForGames = () => {
    const introduce = '\nWelcome to the Brain Games!!!\nFind the greatest common divisor of given numbers.';
    const first = randomGeneration();
    const second = randomGeneration();
    const randomData = `${first} ${second}`;
    let GCD;
    const getGCD = (firstNumber, secondNumber) => {
      for (let i = secondNumber; i >= 1; i -= 1) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
          GCD = i;
          break;
        }
      }
      return `${GCD}`;
    };
    const randomAndGCD = cons(randomData, getGCD(first, second));
    const dataForGames = cons(randomAndGCD, introduce);
    return dataForGames;
  };
  gameEngine(getDataForGames);
};

export default gcd;
