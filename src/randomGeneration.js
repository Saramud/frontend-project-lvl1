const randomGeneration = (number, defaultN = 0) => {
  const rangeRandomNumbers = number;
  return (Math.floor(Math.random() * rangeRandomNumbers) + defaultN);
};

export default randomGeneration;
