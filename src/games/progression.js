import { cons } from 'hexlet-pairs';
import randomGeneration from '../randomGeneration';
import launchEngine from '..';

const annotation = ['Welcome to the Brain Games!!!', 'What number is missing in the progression?'];
const lengthProgression = 10;
const first = randomGeneration(500, 500);

const brainProgression = () => {
  const getGameData = () => {
    let fillerProgression = first;
    const progressions = [];
    let question = '';
    const emptyPosition = randomGeneration(lengthProgression);
    const progressionStep = randomGeneration(4, 4);
    for (let i = 0; i < lengthProgression; i += 1) {
      progressions.push(fillerProgression += progressionStep);
    }
    const answer = `${progressions[emptyPosition]}`;
    progressions[emptyPosition] = '..';
    for (let i = 0; i < lengthProgression; i += 1) {
      question = `${question} ${progressions[i]}`;
    }
    const gameData = cons(question, answer);
    return gameData;
  };
  launchEngine(getGameData, annotation);
};

export default brainProgression;
