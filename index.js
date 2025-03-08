const readline = require("readline");

ls = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cal = () => {
    // 1. Get all numbers and operators, tokens = ['1', '+', '1']
    // 2. Create a object that tell what the order is for the operators {'+': 1, '-': 1", '*': 2}
    // 3. Create a array for numbers
    // 4. Create a array for the operators
    // 5. loop thought the tokens
    // 6. Get the token
    // 7. Change string to number
    // 8. if the string is a number
    //      8.1 push it to the number array
    // 9. check has this operator have a higher operator then previous one
    // 10. if have higher operator then calResult() and add to operands
   // 11. else add operator add the operators array

    // getResult(a, b, operator)
    // 1. calResult(a, b, operator)
   

    // calResult
    // 1. switch(operator)
    // 2. case '+' : return a+b
    // 3. case '-' : return a-b
    // 4. case '*' : return a*b
    // 5. case '/' : return a/b

    const operators = [];
    const operands = [];
}





const askQuestion = () => {
    ls.question("Hellow Word! plz input:", (answer) =>{
        if (answer === 'EXIT' || answer === 'exit') {
            ls.close();
            return;
        }

        const result = cal(answer);

        console.log(answer);
        askQuestion();
    }
        
    )
}

askQuestion();