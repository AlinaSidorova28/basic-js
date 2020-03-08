const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const K=0.693/HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity != 'string')
    return false;
  let sample = parseFloat(sampleActivity);
  if(sample<=0 || sample>15 || isNaN(sample))
    return false;
  
  let age = Math.log(MODERN_ACTIVITY/sample) / K;
  return Math.ceil(age);
};
