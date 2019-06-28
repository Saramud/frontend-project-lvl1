import { cons } from 'hexlet-pairs';
import randomGeneration from '../generationData';
import { gameEngine } from '..';

const annotation = '\nWelcome to the Brain Games!!!\nWhat number is missing in the progression?';

const progression = () => {
  const getDataGames = () => {
    let first = randomGeneration(500);
    const lengthProgression = 10;
    const progressions = [];
    let question = '';
    const emptyPosition = Math.floor(Math.random() * lengthProgression);
    const progressionStep = randomGeneration(4);
    for (let i = 0; i < lengthProgression; i += 1) {
      progressions.push(first += progressionStep);
    }
    const answer = `${progressions[emptyPosition]}`;
    progressions[emptyPosition] = '..';
    for (let i = 0; i < lengthProgression; i += 1) {
      question += `${progressions[i]} `;
    }
    const questionAnswer = cons(question, answer);
    const gameData = cons(questionAnswer, annotation);
    return gameData;
  };
  gameEngine(getDataGames);
};

export default progression;
