const getRandom = (a, b) => {
  const randomNumber = (Math.floor(Math.random() * b));
  if (randomNumber < a || randomNumber > b) {
    return getRandom(a, b);
  }
  return randomNumber;
};

export default getRandom;
