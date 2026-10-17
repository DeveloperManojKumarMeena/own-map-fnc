// Q.Implement a function that limits how many times another function can be called (Closure + HOF).

function limiter(fn,v){
    let setvalue = 0;
    return ()=>{
        if(setvalue<v){
            setvalue++
            fn()
        }
    }
}

let test = limiter(()=>{console.log("Hey bro")},5);

test()
test()
test()
test()
test()
test()
test()
test()
test()
test()