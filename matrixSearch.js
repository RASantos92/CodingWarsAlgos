

function matrixSearch(matrix, img) {
    const first = img[0][0];
    const imgHeight = img.length;
    const imgWidth = img[0].length;
    const relevantHeight = matrix.length;
    const relevantWidth = matrix[0].length;

    for (let i = 0; i < relevantHeight; i++) {
        for (let j = 0; j < relevantWidth; j++) {
            if (matrix[i][j] !== first) continue;
            for (var k = 0, matching = true; k < imgHeight && matching; k++) {
                for (let l = 0; l < imgWidth && matching; l++) {
                    if (img[k][l] !== matrix[i + k][j + l]) {
                        matching = false;
                    }
                }
            }
            if (matching) return matching;
        }
    }

    return matching;
}
console.log(matrixSearch([ [12, 34, 45, 56],[98, 87, 76, 65],[56, 67, 78, 89],[54, 43, 32, 21] ], [ [67, 78], [43, 32] ])); // true
console.log(matrixSearch([ [12, 34, 45, 56],[98, 87, 76, 65],[56, 67, 78, 89],[54, 43, 32, 21] ], [ [67, 78], [43, 21] ])); // false