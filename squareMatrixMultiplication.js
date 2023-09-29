// Write a function that accepts two square (NxN) matrices (two dimensional arrays), and returns the product of the two. Only square matrices will be given.

// How to multiply two square matrices:

// We are given two matrices, A and B, of size 2x2 (note: tests are not limited to 2x2). Matrix C, the solution, will be equal to the product of A and B. To fill in cell [0][0] of matrix C, you need to compute: A[0][0] * B[0][0] + A[0][1] * B[1][0].

// More general: To fill in cell [n][m] of matrix C, you need to first multiply the elements in the nth row of matrix A by the elements in the mth column of matrix B, then take the sum of all those products. This will give you the value for cell [m][n] in matrix C.
// 
// C[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] + A[0][2] * B[2][0] = 1*3 + 2*1 =  5
// C[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1] + A[0][2] * B[2][1] = 1*2 + 2*1 =  4
// C[0][2] = a[0][0] * B[0][2] + A[0][1] * B[1][2] + A[0][2] * B[2][2]
// C[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0] = 3*3 + 2*1 = 11
// C[1][1] = A[1][0] * B[0][1] + A[1][1] * B[1][1] = 3*2 + 2*1 =  8


const testMatrix0 = [ [ 1, 2, 3 ], [ 3, 2, 1 ], [ 2, 1, 3 ] ]
const testMatrix1 = [ [ 4, 5, 6 ], [ 6, 5, 4 ], [ 4, 6, 5 ] ]
function matrixMultiplication(a, b){
    console.log(a,b)
    let output = []
    let oI0 = 0
    for(var i = 0; i<a.length; i++){
        let preOutput = []
        for(var j = 0; j<a[i].length; j++){
            let h = 0
            let sum = 0
            while(h < a[i].length){
                sum += a[oI0][h]*b[h][j]
                h++
            }
            preOutput.push(sum) 
            sum = 0
        }
        output.push(preOutput)
        oI0++
        if(oI0 > a.length-1){
            oI0 = 0
        }
    }
    return output
}

function matrixMultiplication2(a,b){
    return a.map(function(row){
        return row.map(function(_,i){
            return row.reduce(function(sum,cell,j){
                return sum+cell*b[j][i];
            },0);
        });
    });
}
console.log(matrixMultiplication2(testMatrix0,testMatrix1))