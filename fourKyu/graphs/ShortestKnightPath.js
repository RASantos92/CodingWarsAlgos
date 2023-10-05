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
    const alphaKeys = {"a":0, "b":1, "c":2, "d":3, "e":4, "f":5, "g":6, "h":7};
    let initalPositionValue = chessBoard[start[1]-1][alphaKeys[start[0]]];
    const finalPostitionValue = chessBoard[finish[1]-1][alphaKeys[finish[0]]];
    let xInitalPosition = start[1]-1
    let yInitalPosition = alphaKeys[start[0]]

    let xFinalPostion = finish[1]-1
    let yFinalPostion = alphaKeys[finish[0]]
    
    const listOfMovesKight = (chessBoard, x, y) => {
        // position values
        const output = [];
        const moving = [2,-2,2,-2]
        for(let i=0; i < moving.length; i++){
            if(i<2){
                x += moving[i];
                output.push(chessBoard[x][y+1]);
                output.push(chessBoard[x][y-1]);
                x -= moving[i]
            } else {
                y += moving[i];
                output.push(chessBoard[x+1][y]);
                output.push(chessBoard[x-1][y]);
                y -= moving[i]
            }
        }
        return output;
    }
    const listOfMoves = listOfMovesKight(chessBoard, xInitalPosition, yInitalPosition);
    console.log(listOfMoves);
    

}

knight("a5", "b5")