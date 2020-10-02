module.exports = function transform(arr) {
      if (!Array.isArray(arr)){
        throw new Error();
      }

     let newarr = [...arr]

    for (let x = 0; x<newarr.length; x++) {
        if (newarr[0] == '--discard-prev' || newarr[0] == '--double-prev') {
            delete newarr[x];
            continue;
        } else if ((arr.length - 1) == ('--double-next' || (arr.length - 1) == '--discard-next')) {
            delete newarr[x];
            continue;
        } else if (newarr[x] == '--discard-next') {
            delete newarr[x];
            delete newarr[x + 1];
        } else if (newarr[x] == '--discard-prev') {
            delete newarr[x];
            delete newarr[x - 1];
        } else if (newarr[x] == '--double-next') {
            if (newarr[x + 1] == undefined){
                delete newarr[x];
                continue;
            }
            newarr[x] = arr[x + 1];
        } else if (newarr[x] == '--double-prev') {
            if (newarr[x - 1] == undefined){
                delete newarr[x];
                continue;
            }
            newarr[x] = newarr[x - 1];
        }
    }
    return newarr.filter(function () { return true });
};
