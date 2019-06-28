import { cons } from 'hexlet-pairs';
import randomGeneration from '../generationData';
import { gameEngine } from '..';

const isEven = number => (!!((number % 2 === 0 && number !== 0)));

const annotation = '\nWelcome to the Brain Games!!!\nAnswer "yes" if number even otherwise answer "no"';

const even = () => {
  const getDataForGames = () => {
    const question = randomGeneration(500);
    const answer = isEven(question) ? 'yes' : 'no';
    const questionAnswer = cons(question, answer);
    const gameData = cons(questionAnswer, annotation);
    return gameData;
  };
  gameEngine(getDataForGames);
};

export default even;
