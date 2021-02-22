// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];

    if (matrix === undefined) {
        return result;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (!(i % 2 == 0)) {
            matrix[i].reverse();
        }

        for (let y = 0; y < matrix[i].length; y++) {
            result.push(matrix[i][y]);
        }
    }

    return result;
};