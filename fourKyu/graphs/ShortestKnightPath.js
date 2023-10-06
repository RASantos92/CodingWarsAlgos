// const buildChessBoard = (x,y) => {
//     const output = [];
//     const row = [];
//     for(let i = 0; i < y; i++) row[i] = 0;
//     for(var i = 0 ; i < x; i++) output[i] = row;
// }

const buildProperChessBoard = () => {
    const alpha = ["a","b","c","d","e","f","g","h"];
    const output = [];
    for(let i = 1; i < 9; i++ ){
        output[i-1] = [];
        for(let j = 0; j < alpha.length; j++){
            output[i-1][j] = alpha[j] + i;
        }
    }
    return output;
}

buildProperChessBoard()
const knight = (start, finish) => {
    const chessBoard = buildProperChessBoard();
    const listOfPickedMoves = [];
    const alphaKeys = {"a":0, "b":1, "c":2, "d":3, "e":4, "f":5, "g":6, "h":7};
    let initalPositionValue = chessBoard[start[1]-1][alphaKeys[start[0]]];
    const finalPostitionValue = chessBoard[finish[1]-1][alphaKeys[finish[0]]];
    let yInitalPosition = start[1]-1
    let xInitalPosition = alphaKeys[start[0]]

    let yFinalPostion = finish[1]-1
    let xFinalPostion = alphaKeys[finish[0]]

    const listOfMovesKight = (chessBoard, x, y) => {
        // position values
        const output = [];
        const moving = [2,-2,2,-2]
        for(let i=0; i < moving.length; i++){
            if(i<2){
                x += moving[i];
                if(chessBoard[x] != undefined){
                    output.push(chessBoard[x][y+1]);
                    output.push(chessBoard[x][y-1]);
                }
                x -= moving[i]
            } else {
                y += moving[i];
                    chessBoard[x+1] !== undefined ? output.push(chessBoard[x+1][y]) : null;
                    chessBoard[x-1] !== undefined ? output.push(chessBoard[x-1][y]): null;
                y -= moving[i]
            }
        }
        return output.filter((e) => e !== undefined);
    }
    while(initalPositionValue != finalPostitionValue){
        const listOfMoves = listOfMovesKight(chessBoard, yInitalPosition, xInitalPosition);
        console.log(listOfMoves);
        let smallestDifference = Infinity;
        let smallestMove = "";
        for(let i=0; i<listOfMoves.length; i++){
            if(listOfMoves[i] === finalPostitionValue){
                listOfPickedMoves.push(listOfMoves[i]);
                return listOfPickedMoves.length;
            }
            const yValueOfMove = listOfMoves[i][1] -1;
            const xValueOfMove = alphaKeys[listOfMoves[i][0]];
            let yDifference = yValueOfMove - yFinalPostion;
            let xDifference = xValueOfMove - xFinalPostion;
            yDifference = yDifference < 0 ? yDifference * -1 : yDifference;
            xDifference = xDifference < 0 ? xDifference * -1 : xDifference;
            console.log("the difference", yDifference, xDifference)
            const totalDifference = yDifference + xDifference;
            if(totalDifference < smallestDifference){
                smallestDifference = totalDifference;
                smallestMove = listOfMoves[i];
            }
        }
        console.log(smallestMove)
        break
    }
    

}

console.log(knight("a1", "b5"))