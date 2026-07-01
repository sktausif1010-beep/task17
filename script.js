// Arrow Function that returns a Promise
const divide = (a, b) => {
    return new Promise((resolve, reject) => {

        if (b === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(a / b);
        }

    });
};

// Test Cases (Minimum 5)

const testCases = [
    [10, 2],
    [20, 5],
    [15, 3],
    [50, 10],
    [10, 0]
];

// Execute all test cases

testCases.forEach(([a, b]) => {

    console.log(`Dividing ${a} by ${b}...`);

    divide(a, b)
        .then(result => {
            console.log("Result:", result);
        })
        .catch(error => {
            console.log(error);
        });

});