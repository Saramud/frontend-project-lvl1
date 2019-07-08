import { cons } from 'hexlet-pairs';
import randomGeneration from '../randomGeneration';
import launchEngine from '..';

const annotation = cons('Welcome to the Brain Games!!!', 'What number is missing in the progression?');

const getProgression = (length) => {
  const progressions = [];
  const first = randomGeneration(500);
  let fillerProgression = first;
  const progressionStep = randomGeneration(8);
  for (let i = 0; i < length; i += 1) {
    progressions.push(fillerProgression += progressionStep);
  }
  return progressions;
};

const brainProgression = () => {
  const getGameData = () => {
    const lengthProgression = 10;
    const progression = getProgression(lengthProgression);
    let question = '';
    const emptyPosition = randomGeneration(lengthProgression - 1);
    const answer = `${progression[emptyPosition]}`;
    progression[emptyPosition] = '..';
    for (let i = 0; i < lengthProgression; i += 1) {
      question = `${question} ${progression[i]}`;
    }
    const gameData = cons(question, answer);
    return gameData;
  };
  launchEngine(getGameData, annotation);
};

export default brainProgression;
