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
    // copy of the field to change the ships position to 0 after visiting the location
    const fieldCopy = [...field];
    // double for loop to gain access to cordinace 
    for(let i = 0; i < field.length; i++){
        for(let j = 0; j < field[i].length; j++){
            const row = fieldCopy[i]
            //finding the start of the ship,
            // problem not revisiting the locations again
            if(row[j] === 1){
                let shipSize = 1;
                const checkDiagonalPositionsValidation = (i, j) => {
                    if(fieldCopy[i+1][j-1] === 1 || fieldCopy[i+1][j+1] === 1) return false;
                    return true;
                }
                // finding direction
                const leftDirection = fieldCopy[i][j+1];
                const verticalDirection = fieldCopy[i+1][j];


                // leftDirection - this is ment to get the shipSize and to validate the ships position
                const checkLowerPositionsForLeftDirection = (i, j) => {
                    if(fieldCopy[i+1][j] == 1 || fieldCopy[i+1][j+1] == 1){
                        return false;
                    }
                    return true;
                }
                if(leftDirection === 1){
                    let nextCheckValue = j+1;
                    while(row[nextCheckValue] == 1){
                        const isPositionValid = checkLowerPositionsForLeftDirection(i,nextCheckValue);
                        if(isPositionValid){
                            shipSize++;
                            // this will patch the 1 value to a zero value in the fieldCopy
                            row[nextCheckValue] = 0;
                            nextCheckValue++
                        }
                    }
                }

                // verticalDirection - This is ment to get the shipSize and to validate the ships position if found to be vertical.
                const checkHorazontalPositionsForVerticalDirection = (i,j) => {
                    if(fieldCopy[i][j+1] == 1 || fieldCopy[i][j-1] == 1){
                        return false;
                    }
                    return true;
                }
                if(verticalDirection == 1 && shipSize == 1){
                    let nextCheckValue = i+1;
                    while(fieldCopy[nextCheckValue][j] == 1){
                        const isPositionValid = checkHorazontalPositionsForVerticalDirection(nextCheckValue,j);
                        if(isPositionValid){
                            shipSize++;
                            fieldCopy[nextCheckValue][j]=0;
                            nextCheckValue++;
                        }
                    }
                }

                // let isPostitionValid = checkDiagonalPositionsValidation(i,j);
                // var isHorazontal = 
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
