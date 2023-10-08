const mix = (s1, s2) => {
    let output = "";
    const buildFrequencyTableOfTwoStrings = (s1, s2) => {
        const frequencyTable = {};
        for(let i = 0; i< (s1.length > s2.length ? s1.length : s2.length); i++){
            if(s1[i] !== s1[i].toUpperCase()){
                if(!frequencyTable[s1[i]]) {
                    frequencyTable[s1[i]] = s1[i];
                }else{
                    frequencyTable[s1[i]] = frequencyTable[s1[i]] + s1[i]
                }
            }
            if(s2[i] && s2[i] !== s2[i].toUpperCase()){
                if(!frequencyTable[s2[i]+"`"]) {
                    frequencyTable[s2[i]+"`"] = s2[i];
                }else{
                    frequencyTable[s2[i]+"`"] = frequencyTable[s2[i]+"`"] + s2[i]
                }
            }
        }
        return frequencyTable;
    }
    const frequencyTable = buildFrequencyTableOfTwoStrings(s1,s2);
    for(const [key, value] of Object.entries(frequencyTable)){
        if(value.length <= 1 || key[1] === "`") continue;
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

        output +=  firstOutputValue + ":" + secondOutputValue + "/"
    }
    console.log("output here",output)
    console.log(frequencyTable)
}

mix("Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff")


