import { cons } from 'hexlet-pairs';

const generateNumber = () => {
  const rangeRandomNumbers = 500;
  return Math.floor(Math.random() * rangeRandomNumbers);
};

const generationDataForGames = () => {
  const firstNum = generateNumber();
  const secondNum = generateNumber();
  const dataForGames = [`${firstNum} - ${secondNum}`, `${firstNum} + ${secondNum}`, `${firstNum} * ${secondNum}`, firstNum, secondNum];
  const coeffForRandomRange = 3;
  const randomRange = Math.floor(Math.random() * coeffForRandomRange);
  const firstPartOfPair = cons(firstNum, dataForGames[randomRange]);
  const secondPartOfPair = cons(dataForGames[3], dataForGames[4]);
  const pairWithDataForGames = cons(firstPartOfPair, secondPartOfPair);
  return pairWithDataForGames;
};

export { generationDataForGames, generateNumber };
