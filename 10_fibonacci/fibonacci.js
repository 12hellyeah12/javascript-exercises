//test command:
//npm test fibonacci.spec.js

// function accepts strings
// does not accept negative numbers or strings

// Input determines the length of the fibonacci sequence
// and which fibonacci number is returned
const fibonacci = function(fibonacciLength) {
    const fibonacciSequence = [1,1];
    const StringtoNum = Number(fibonacciLength);

    if(StringtoNum === 0){
        return 0;
    } else if(StringtoNum < 0){
        return "OOPS";
    }
    
    while(fibonacciSequence.length < StringtoNum){
        let sum = 0;
        for(i = fibonacciSequence.length - 1; 
            i > fibonacciSequence.length - 3 ; i--){
        sum += fibonacciSequence[i];

        }
    fibonacciSequence.push(sum);

    }
    return fibonacciSequence[StringtoNum - 1];
}

//console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
