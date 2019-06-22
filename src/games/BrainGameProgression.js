import { car, cons } from 'hexlet-pairs';
import { generationDataForGames } from './generationDataForGames';
import { gameEngine } from '../index';

const brainGameProgression = () => {
  console.log('\nWelcome to the Brain Games!!!');
  console.log('What number is missing in the progression?');
  const getPairProgressionAndDeletedNumber = (a) => {
    let firstRandomNumberForProgression = car(car(a()));
    const Progression = [];
    let stringProgression = '';
    const rangeProgressionPosition = 10;
    const positionforDot = Math.floor(Math.random() * rangeProgressionPosition);
    // 3 - is random step, 2 - if (Math.floor(...) == 0)
    const progressionStep = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < 10; i += 1) {
      Progression.push(firstRandomNumberForProgression += progressionStep);
    }
    const deletedNumberOfProgression = `${Progression[positionforDot]}`;
    Progression[positionforDot] = '..';
    for (let i = 0; i < 10; i += 1) {
      stringProgression += `${Progression[i]} `;
    }
    const pairProgressionAndDelNumber = cons(stringProgression, deletedNumberOfProgression);
    return pairProgressionAndDelNumber;
  };
  gameEngine(getPairProgressionAndDeletedNumber, generationDataForGames);
};
export default brainGameProgression;
