const getRandom = (number) => {
  const randomNumber = (Math.floor(Math.random() * number));
  if (randomNumber === 0) {
    return number;
  }
  return randomNumber;
};

export default getRandom;
