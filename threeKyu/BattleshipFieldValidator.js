// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript

// const returnEmptyBoard = () => {
//     const output = []
//     const row = [0,0,0,0,0,0,0,0,0,0]
//     for(let i = 0; i < 10; i++){
//         output.push(row);
//     }
//     return output;
// }


const fieldValidator = (field) => {
    const shipChecklist = {
        "battleship":{
            "size":4,
            "quantity":1,
            "found":0
        },
        "cruisers":{
            "size":3,
            "quantity":2,
            "found":0
        },
        "destroyers": {
            "size": 2,
            "quantity":3,
            "found":0
        },
        "submarines":{
            "size":1,
            "quantity":4,
            "found":0
        }
    }

    for(let i = 0; i < field.length; i++){
        for(let j = 0; j < field[i].length; j++){
            const row = field[i]
            if(row[j] === 1){
                const checkDiagonalPositions = (i, j) => {
                    if(field[i+1][j-1] === 1 || field[i+1][j+1] === 1) return false;
                    return true;
                }

            }
        }
    }

}
