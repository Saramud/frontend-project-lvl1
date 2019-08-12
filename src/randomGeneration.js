const getRandom = (a, b) => {
  const randomNumber = (Math.floor(Math.random() * b)) - (Math.floor(Math.random() * a));
  return randomNumber;
};

export default getRandom;
