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
    const fieldCopy = [...field];
    for(let i = 0; i < field.length; i++){
        for(let j = 0; j < field[i].length; j++){
            const row = fieldCopy[i]
            //finding the start of the ship,
            // problem not revisiting the locations again
            if(row[j] === 1){
                let count = 1;
                const checkDiagonalPositionsValidation = (i, j) => {
                    if(fieldCopy[i+1][j-1] === 1 || fieldCopy[i+1][j+1] === 1) return false;
                    return true;
                }
                // finding direction
                if(fieldCopy[i][j+1] === 1){
                    
                }
                let isPostitionValid = checkDiagonalPositionsValidation(i,j);
                var isHorazontal = 
            }
        }
    }

}

[
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]
