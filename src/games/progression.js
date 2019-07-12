import { cons } from 'hexlet-pairs';
import getRandom from '../randomGeneration';
import engine from '..';

const annotation = 'What number is missing in the progression?';
const lengthProgression = 10;

const getProgression = (length, headProgression, step) => {
  const progressions = [];
  for (let i = 0; i < length; i += 1) {
    progressions.push(headProgression + step * i);
  }
  return progressions;
};

const brainProgression = () => {
  const getGameData = () => {
    const first = getRandom(500);
    const progressionStep = getRandom(8);
    const progression = getProgression(lengthProgression, first, progressionStep);
    let question = '';
    const emptyPosition = getRandom(lengthProgression - 1);
    const answer = progression[emptyPosition].toString();
    progression[emptyPosition] = '..';
    for (let i = 0; i < lengthProgression; i += 1) {
      question = `${question} ${progression[i]}`;
    }
    const gameData = cons(question, answer);
    return gameData;
  };
  engine(getGameData, annotation);
};

export default brainProgression;
