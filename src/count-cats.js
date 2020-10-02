module.exports = function countCats(backyard) {
    return backyard.reduce(function (cats, bushs) {
        return cats + bushs.reduce(function (catsInBush, bush) {
            return catsInBush + (bush == "^^" ? 1 : 0)
        }, 0)
    }, 0);
};

