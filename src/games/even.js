import { cons } from 'hexlet-pairs';
import randomGeneration from '../generationData';
import { gameEngine } from '../index';

const even = () => {
  const hasEven = number => ((number % 2 === 0 && number !== 0) ? 'yes' : 'no');
  const getDataForGames = () => {
    const intoduce = '\nWelcome to the Brain Games!!!\nAnswer "yes" if number even otherwise answer "no"';
    const first = randomGeneration();
    const status = hasEven(first);
    const questionAndAnswer = cons(first, status);
    const dataForGames = cons(questionAndAnswer, intoduce);
    return dataForGames;
  };
  gameEngine(getDataForGames);
};

export default even;
