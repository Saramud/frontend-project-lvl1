export const randomGeneration = (number) => {
  const rangeRandomNumbers = number;
  return (Math.floor(Math.random() * rangeRandomNumbers));
};

export const generationWithoutZero = (number) => {
  const randomNumber = randomGeneration(number);
  if (randomNumber === 0) {
    return number;
  }
  return randomNumber;
};
