
const randomGeneration = (number) => {
  const rangeRandomNumbers = number;
  const defaultNumber = number;
  return (Math.floor(Math.random() * rangeRandomNumbers)) + defaultNumber;
};

export default randomGeneration;
