const randomGeneration = (number) => {
  const rangeRandomNumbers = number;
  let randomNumber = (Math.floor(Math.random() * rangeRandomNumbers));
  if (randomNumber === 0) {
    randomNumber += number;
  }
  return randomNumber;
};

export default randomGeneration;
