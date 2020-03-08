module.exports = function repeater(str, options) {
    let opt_sep = (!options.hasOwnProperty("separator")) ? "+" : options.separator;
    let add_sep = (!options.hasOwnProperty("additionSeparator")) ? "|" : options.additionSeparator;
    let opt_times = (options.repeatTimes === undefined) ? 1 : options.repeatTimes;
    let add_times = (options.additionRepeatTimes === undefined) ? 1 : options.additionRepeatTimes;

    let res_str = '';
    let res_add = [];
    let res = [];

    for(let i=0; i<add_times; i++){
        if(options.addition !== undefined)
            res_add.push(String(options.addition));
    }

    for(let i=0; i<opt_times; i++){        
        res_str = String(str) + res_add.join(add_sep);
        res.push(res_str);
    }
    return res.join(opt_sep);
};
  