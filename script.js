let arr = [1, 2, 3, 4, 5];

const cap = (a,fn)=>{
    let newArray = new Array();

    for(let i=0;i<a.length;i++){
        newArray.push(fn(a[i]))
    }
    return newArray
}

let ans = cap(arr,function(v){
    return v+2
})

console.log(ans)