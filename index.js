const readline = require("readline");

ls = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calResult = (operator, a, b) => {
    switch(operator) {
        case "+":
            return a+b;
         case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
    }
}

const cal = (answer) => {
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
    const precedence = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
    };
    const tokens = answer.match(/\+|\S/g);

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i]
        const isNumber = !isNaN(parseInt(token))
        if (isNumber) {
            operands.push(parseInt(token));
        }else{
            const hasHigherPrecedence = 
                precedence[operators[operators.length - 1]] > precedence[token];
            while(operators.length && hasHigherPrecedence) {
                const a = operands.pop();
                const b = operands.pop();
                const operator = operators.pop();
                const result = calResult(operator, a, b);
                operands.push(result);
            }
            operators.push(token)
        }
    }

    while(operators.length > 0) {
        const a = operands.pop()
        const b = operands.pop()
        const operator = operators.pop()
        const result = calResult(operator, a, b)
        operands.push(result)
    }

    return operands.pop()
}





const askQuestion = () => {
    ls.question("Hellow Word! plz input:", (answer) =>{
        if (answer === 'EXIT' || answer === 'exit') {
            ls.close();
            return;
        }

        const result = cal(answer);

        console.log(result);
        askQuestion();
    }
        
    )
}

askQuestion();