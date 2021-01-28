/***
 * Problem Statement:
 * Given a string, write a function that returns a string containing
 * each of the original string's unique characters once, followed by
 * that character's integer number of occurrences in the original string.
**/

// Here's my solution in JavaScript:

/***
 * `f(str)` splits `str` into individual characters,
 * then reduces that array into an object of the form:
 * { char: count, char: count, ... }
 * where `count` is the character's number of occurrences.
 * We return the desired string by reducing that object's keys.
 */
const f = (str) => {
    const counts = str.split('')
        .reduce((partialCounts, c) => ({
            ...partialCounts,
            [c]: (partialCounts[c] || 0) + 1
        }), {});
    return Object.keys(counts).reduce((partialResult, c) =>
        `${partialResult}${c}${counts[c]}`, '');
};

// Tests:

const test1 = "hello world"; // Answer: "h1e1l3o2 1w1r1d1"
const test2 = "seashell"; // Answer: "s2e2a1h1l2"

console.log(f(test1)); // pass
console.log(f(test2)); // pass