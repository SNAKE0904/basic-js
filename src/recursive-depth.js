module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let finaldepth = 1;
    arr.forEach((count) => {
      let countdepth = 1;
      if (count instanceof Array) {
        countdepth += this.calculateDepth(count);
        finaldepth = Math.max(finaldepth, countdepth);
      }
      countdepth = 1;
    })
    return finaldepth;
  }
};