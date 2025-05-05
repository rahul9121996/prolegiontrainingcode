// Exporting a function
export function add(a, b) {
    return a + b;
}

// Exporting a variable
export const PI = 3.1416;

// using default export
// A module can have one default export, which can be imported without curly braces {}.

export default function multiply(a, b) {
    return a * b;
}

// common js module
function add(a, b) {
    return a + b;
}
module.exports = add;