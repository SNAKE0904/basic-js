const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    const word = str;

    const param = {
        repeatTimes: options.repeatTimes == undefined ? 1 : options.repeatTimes,
        separator: options.separator === undefined ? '+' : options.separator,
        addition:  options.addition === undefined ? null : options.addition,
        additionRepeatTimes: options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes,
        additionSeparator: options.additionSeparator === undefined ? null : options.additionSeparator,
    }

    function repit(){
        let blob;
        for(let x = 0; x < param.additionRepeatTimes; x++) {
            if(x !== 0) {
                blob += param.additionSeparator + param.addition;
            }else if(x == 0) {
                blob = param.addition;
            }
        }
        return blob == undefined ? '': blob;
    }

    let string;

    for(let x = 0; x < param.repeatTimes; x++) {
        if (x !== 0) {
            string += param.separator + word + repit();
        } else if (x == 0) {
            string = word + repit();
        }
    }
    return string;
};
  