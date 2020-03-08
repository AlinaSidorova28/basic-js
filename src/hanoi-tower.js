module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let res = new Object();
    let speed = turnsSpeed / 3600;
    res.turns = Math.pow(2, disksNumber) - 1;
    res.seconds = res["turns"] / speed;
    return res;
}