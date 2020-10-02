const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string' || /[A-Za-z]/.test(sampleActivity) || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0){
        return false;
    }

    let floatSampleActivity = parseFloat(sampleActivity);
    let reac = Math.log(2).toFixed(3) / HALF_LIFE_PERIOD;
    let years = Math.log(MODERN_ACTIVITY / floatSampleActivity) / reac;
    let year = Math.ceil(years);
    return year;
};
