function GCF(x,y){
    if(x === y){
        return x
    }
    if(x<y){
        return GCF(x, y-x)
    }
    else{
        return GCF(x-y,y)
    }
}

console.log(GCF(12,15))