// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript
const checkLowerPositionsForLeftDirection = (i, j, fieldCopy) => {
    if(fieldCopy[i+1] === undefined){
        return true;
    }
    if(fieldCopy[i+1][j] == 1 || fieldCopy[i+1][j+1] == 1){
        return false;
    }
    return true;
}

const checkHorazontalPositionsForVerticalDirection = (i,j,fieldCopy) => {
    if(fieldCopy[i][j+1] == 1 || fieldCopy[i][j-1] == 1 || fieldCopy[i+1][j+1] == 1 || fieldCopy[i+1][j-1] == 1){
        return false;
    }
    return true;
}

const checkSubmarineValidations = (i,j, fieldCopy) => {
    if(fieldCopy[i+1] === undefined) return true;
    if(fieldCopy[i+1][j+1] === 1) return false;
    return true
}

const fieldValidator = (field) => {
    const shipChecklist = {
        "battleship":{
            "size":4,
            "maxQuantity":1,
            "found":0
        },
        "cruisers":{
            "size":3,
            "maxQuantity":2,
            "found":0
        },
        "destroyers": {
            "size": 2,
            "maxQuantity":3,
            "found":0
        },
        "submarines":{
            "size":1,
            "maxQuantity":4,
            "found":0
        }
    }
    // copy of the field to change the ships position to 0 after visiting the location
    const fieldCopy = [...field];
    // double for loop to gain access to cordinace 
    for(let i = 0; i < field.length; i++){
        for(let j = 0; j < field[i].length; j++){
            const row = fieldCopy[i]
            // finding the start of the ship,
            if(row[j] === 1){
                let shipSize = 1;
                const leftDirection = fieldCopy[i][j+1];
                // Teranary to check if we are verticaly in bounds
                const verticalDirection = fieldCopy[i+1] === undefined ? false : fieldCopy[i+1][j];
                // leftDirection - this is ment to get the shipSize and to validate the ships position
                if(leftDirection === 1){
                    let nextCheckValue = j+1;
                    while(row[nextCheckValue] == 1){
                        // Here we check if the position is valid.
                        const isPositionValid = checkLowerPositionsForLeftDirection(i,nextCheckValue,fieldCopy);
                        if(isPositionValid){
                            shipSize++;
                            // this will patch the 1 value to a zero value in the fieldCopy
                            row[nextCheckValue] = 0;
                            nextCheckValue++
                        }
                    }
                }
                // verticalDirection - This is ment to get the shipSize and to validate the ships position if found to be vertical.
                if(verticalDirection == 1 && shipSize == 1){
                    let nextCheckValue = i+1;
                    while(fieldCopy[nextCheckValue][j] == 1){
                        const isPositionValid = checkHorazontalPositionsForVerticalDirection(nextCheckValue,j,fieldCopy);
                        if(isPositionValid){
                            shipSize++;
                            fieldCopy[nextCheckValue][j]=0;
                            nextCheckValue++;
                        } else { return false }
                    }
                }
                // if the ship size is 1 we need to validate a submarine
                if(shipSize == 1) {
                    const submarineValid = checkSubmarineValidations(i,j,fieldCopy)
                    if(!submarineValid) {
                        return false
                    }
                }
                // now we should have the ships size. lets use it to see what ship we have and validate that dont have the max ammount yet;
                for (const [ship, specs] of Object.entries(shipChecklist)){
                    if(specs["size"] === shipSize && specs["maxQuantity"] > specs["found"] ){
                        shipChecklist[ship]["found"]++;
                        fieldCopy[i][j] = 0;
                        break;
                    }
                    // this will return false if it finds that we will surpass the max ship ammount
                    if(specs["size"] === shipSize && specs["maxQuantity"] == specs["found"] ){
                        return false;
                    }
                }
            }
        }
    }
    return shipChecklist;
}

const testFeild = [
    [0,0,0,0,0,0,1,0,0,1],
    [0,0,1,1,0,0,1,0,0,0],
    [0,0,0,0,0,0,1,0,1,0],
    [0,1,0,1,0,0,1,0,0,0],
    [0,1,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,1,0,1],
    [0,0,0,0,0,0,0,1,0,1],
    [1,0,0,1,1,1,0,0,0,0],
]

console.log(fieldValidator(testFeild))