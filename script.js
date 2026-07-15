const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {

        if (num2 === 0) {
            reject("Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }

    });
};

console.log("Example 1");
console.log("Dividing 10 by 2...");

divideNumbers(10, 2)
    .then(result => {
        console.log("Result:", result);

        console.log("\nExample 2");
        console.log("Dividing 10 by 0...");

        return divideNumbers(10, 0);
    })
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });