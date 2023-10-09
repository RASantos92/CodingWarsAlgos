
const mix = (s1, s2) => {
    let output = "";
    const regex = /[A-Z + \ ]/g;
    const s1NoCapitals = s1.replaceAll(regex, "");
    const s2NoCapitals = s2.replaceAll(regex, "");
    const buildFrequencyTableOfTwoStrings = (s1, s2) => {
        const frequencyTable = {};
        for (let i = 0; i < (s1.length > s2.length ? s1.length : s2.length); i++) {
            if (!frequencyTable[s1[i]]) {
                frequencyTable[s1[i]] = s1[i];
            } else {
                frequencyTable[s1[i]] = frequencyTable[s1[i]] + s1[i]
            }
            if (s2[i]) {
                if (!frequencyTable[s2[i] + "`"]) {
                    frequencyTable[s2[i] + "`"] = s2[i];
                } else {
                    frequencyTable[s2[i] + "`"] = frequencyTable[s2[i] + "`"] + s2[i]
                }
            }
        }
        return frequencyTable;
    }
    const frequencyTable = buildFrequencyTableOfTwoStrings(s1NoCapitals, s2NoCapitals);

    for (const [key, value] of Object.entries(frequencyTable)) {
        if ((value.length <= 1 && frequencyTable[key + "`"]?.length <= 1) || key[1] === "`") continue;
        let firstOutputValue = "";
        let secondOutputValue = "";
        if (value.length > frequencyTable[key + "`"]?.length) {
            firstOutputValue = "1";
            secondOutputValue = value;
        } else if (value.length === frequencyTable[key + "`"]?.length) {
            firstOutputValue = "="
            secondOutputValue = value;
        } else { firstOutputValue = "2"; secondOutputValue = frequencyTable[key + "`"] };
        // console.log("hello", frequencyTable[key + "`"]?.length)
        secondOutputValue ? output += firstOutputValue + ":" + secondOutputValue + "/" : null;
    }
    // console.log("output here", output)
    // console.log(frequencyTable)
    return output;
}

console.log(mix("Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff"))


// const re = new RegExp("[a-z]")
// const test = "TTTTTest"
// const regex = /[A-Z]/g;
// test.replaceAll(regex, "")
// console.log(test.replaceAll(regex, ""))

// best solution

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// function mix(s1, s2) {
//     return alphabet
//         .map(char => {
//             const s1Count = s1.split('').filter(x => x === char).length,
//                 s2Count = s2.split('').filter(x => x === char).length,
//                 maxCount = Math.max(s1Count, s2Count);

//             return {
//                 char: char,
//                 count: maxCount,
//                 src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
//             };
//         })
//         .filter(c => c.count > 1)
//         .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
//         .map(c => `${c.src}:${c.char.repeat(c.count)}`)
//         .join('/');
// }


const test = "2:rr/2:eeeee/1:tt/=:hh/=:aaaaaa/=:fffff/"
const splitTest = test.split("/");
splitTest.sort((a, b)=>{
    if(a[2] < b[2]){
        return -1;
    }
    if(a[2] > b[2]){
        return 1;
    }
    return 0;
})
console.log(splitTest)