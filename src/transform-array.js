module.exports = function transform(arr) {
    if(!Array.isArray(arr))
        throw Error;
    let new_array = [];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i] === "--discard-next") {
                i++;
            }
        else if(arr[i] === "--discard-prev") {
                new_array.pop();
           }
        else if(arr[i] === "--double-next") {
                new_array.push(arr[i+1]);
           }
        else if(arr[i] === "--double-prev") {
                new_array.push(arr[i-1]);
           }
        else {
            new_array.push(arr[i]);
        }
    }
    for(let i=0; i<new_array.length; i++)
    {
        if(new_array[i] == undefined)
            new_array.splice(i, 1);
    }
    return new_array;
};
