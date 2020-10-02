module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let count = Math.pow(2, disksNumber) - 1;
  let times = Math.floor((count / turnsSpeed) * 3600);

  return {
    turns: count,
    seconds: times
  }
};
