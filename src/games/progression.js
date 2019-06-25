import { cons } from 'hexlet-pairs';
import randomGeneration from '../generationData';
import { gameEngine } from '../index';

const progression = () => {
  const getDataForGames = () => {
    const introduce = '\nWelcome to the Brain Games!!!\nWhat number is missing in the progression?';
    let first = randomGeneration();
    const lengthProgression = 10;
    const Progression = [];
    let translatedProgression = '';
    const deletedPlace = Math.floor(Math.random() * lengthProgression);
    const step = 5;
    const defaultStep = 2;
    const progressionStep = Math.floor(Math.random() * step) + defaultStep;
    for (let i = 0; i < lengthProgression; i += 1) {
      Progression.push(first += progressionStep);
    }
    const emptyPlace = `${Progression[deletedPlace]}`;
    Progression[deletedPlace] = '..';
    for (let i = 0; i < 10; i += 1) {
      translatedProgression += `${Progression[i]} `;
    }
    const progressionAndAnswer = cons(translatedProgression, emptyPlace);
    const dataForGames = cons(progressionAndAnswer, introduce);
    return dataForGames;
  };
  gameEngine(getDataForGames);
};

export default progression;
