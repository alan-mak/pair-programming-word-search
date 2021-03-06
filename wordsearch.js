const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const horizontalReverse = horizontalJoin;
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (l of horizontalReverse) {
        let m = l.split('').reverse().join('');
        if (m.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    const verticalReverse = verticalJoin;
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    for (l of verticalReverse) {
        let m = l.split('').reverse().join('');
        if (m.includes(word)) return true
    }
    return false;
}


module.exports = wordSearch

const transpose = function (matrix) {
    // Put your solution here
    let newArr = [];

    for (let i = 0; i < matrix[0].length; i++) {
        newArr.push([]);
        for (let j = 0; j < matrix.length; j++) {
            newArr[i].push(matrix[j][i]);
        }
    }
    // console.log(newArr)
    return newArr;
};

const result = wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'YENER')
// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}