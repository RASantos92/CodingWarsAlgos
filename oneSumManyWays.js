// How many ways can you make the sum of a number?
// From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:
// ========================================================================
// solution half baked
// ========================================================================

function sum(num,subNum=0,count=0) {
    //End case for my recursive function
    //decrementing the givin number down to 0
    if(num === 0){
        console.log(num,subNum,count,"line 8")
        //count will keep track of how many steps are taken
        return count
    }
    if(subNum === 0){
        //Step 1. decr. num by 1, give to our subNum, count increments keeping track of our steps.
        console.log(num,subNum,count,"line 11")
        num--
        subNum++
        count++
        console.log(num,subNum,count,"line 16")
        return sum(num,subNum,count)
    }
    if(subNum === 1){
        console.log(num,subNum,count,"line 20")
        num--
        subNum++
        count++
        console.log(num,subNum,count,"line 23")
        return sum(num,subNum,count)
    }
    if(subNum > 1){
        let tempFloor = Math.floor(subNum/2)
        let tempCeil = Math.ceil(subNum/2)
        if(num === 1 && tempCeil === 1){
            console.log(num,subNum,count,"line 30")
            return sum(0,tempCeil,count+=1)
        }
        if(tempFloor === 1 && tempCeil === 1){
            console.log(num,subNum,count,"line 34")
            count++
            console.log(num,subNum,count,"line 36")
            return sum(num, tempFloor,count)
        }
        if(tempCeil > 1){
            
        }
    }
}
console.log("*******testing 4*********")
console.log(sum(4))
console.log("*******testing 5*********")
console.log(sum(5))
// ========================================================================
// attempt to visualize
// ========================================================================
function dictMap(num){
    var output = {}
    for(var i = 0; i < num; i++){
        var tempArr = []
        for(var j = 0; j<num; j++){
            if(i == 0){
                tempArr.push(1)
            }
            else{
                tempArr.push(0)
            }
        }
        output[i] = tempArr
    }
    return output
}

function sum1(num,output={},count=0){
    if((Object.keys(output).length === 0)){
        var output = dictMap(num)
        count++
    }
    console.log("Step one || creating a grid based on the number input", output)
    for (var key in output){
        let keyAfter = parseInt(key) + 1
        let shiftCount = 0
        if(output[key].length > 1 && output[key].length == output[keyAfter].length && output[keyAfter][output[keyAfter]-1] != 1){
            shiftCount++
            output[key].pop()
        } 
        if (shiftCount === 1){
            output[keyAfter].unshift(1)
            console.log(output)
            output[keyAfter].pop()
            shiftCount--
        }
        else{
            output[key].pop()
        }
        console.log(shiftCount)
        if(shiftCount === 0){
            break
        }
        console.log(output[key].length)
    }
    return output
}
