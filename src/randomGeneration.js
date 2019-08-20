const getRandom = (a, b) => {
  const randomNumber = (a + (Math.floor(Math.random() * (b + 1 - a))));
  return randomNumber;
};

export default getRandom;
