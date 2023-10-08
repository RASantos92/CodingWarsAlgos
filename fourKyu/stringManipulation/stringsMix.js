
const mix = (s1, s2) => {
    let output = "";
    const regex = /[A-Z + \ ]/g;
    const s1NoCapitals = s1.replaceAll(regex, "");
    const s2NoCapitals = s2.replaceAll(regex, "");
    const buildFrequencyTableOfTwoStrings = (s1, s2) => {
        const frequencyTable = {};
        for(let i = 0; i< (s1.length > s2.length ? s1.length : s2.length); i++){
                if(!frequencyTable[s1[i]]) {
                    frequencyTable[s1[i]] = s1[i];
                }else{
                    frequencyTable[s1[i]] = frequencyTable[s1[i]] + s1[i]
                }
            if(s2[i]){
                if(!frequencyTable[s2[i]+"`"]) {
                    frequencyTable[s2[i]+"`"] = s2[i];
                }else{
                    frequencyTable[s2[i]+"`"] = frequencyTable[s2[i]+"`"] + s2[i]
                }
            }
        }
        return frequencyTable;
    }
    const frequencyTable = buildFrequencyTableOfTwoStrings(s1NoCapitals,s2NoCapitals);
    for(const [key, value] of Object.entries(frequencyTable)){
        if((value.length <= 1 && frequencyTable[key+"`"]?.length <=1) || key[1] === "`") continue;
        let firstOutputValue = "";
        let secondOutputValue = "";
        if(value.length > frequencyTable[key+"`"]?.length){
            firstOutputValue = "1";
            secondOutputValue = value;
        } else if (value.length === frequencyTable[key+"`"]?.length){
            firstOutputValue = "="
            secondOutputValue = value;
        } else { firstOutputValue = "2"; secondOutputValue = frequencyTable[key+"`"] };
        console.log("hello", frequencyTable[key+"`"]?.length)
        
        secondOutputValue ? output +=  firstOutputValue + ":" + secondOutputValue + "/" : null;
    }
    console.log("output here",output)
    console.log(frequencyTable)
}

mix("Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff")


// const re = new RegExp("[a-z]")
// const test = "TTTTTest"
// const regex = /[A-Z]/g;
// test.replaceAll(regex, "")
// console.log(test.replaceAll(regex, ""))
