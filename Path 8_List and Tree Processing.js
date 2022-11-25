////////////////////////////////////////////////////////////
//PATH 8: LIST AND TREE PROCESSING (XP: 225 / 200)

//P8, TASK 1
// Produces a list of integers from a to b,
// assuming a, b are integers.

function enum_list(a, b) {
    return a <= b
            ? pair(a,enum_list(a+1,b))
            : null;
}

enum_list(0,5);






//P8, TASK 2
// Produces a list of integers from a to b,
// assuming a, b are integers.

function enum_list(a, b) {
    return a <= b
            ? build_list(x => x + a, b - a + 1)
            : null;
}






//P8, TASK 3
// You must use the supplied filter function.

// Given a list of integers xs, returns a list that
//   contains only the odd integers in xs.
function odd_only(xs) {
    return filter (x => x % 2 !== 0, xs);
}

// Given a list of positive integers xs, returns a list that
//   contains only the prime numbers in xs.
// Hint: write a helper function.
function smallest_divisor(n) {
    return find_divisor(n, 2);
}

function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
           ? n
           : divides(test_divisor, n)
           ? test_divisor
           : find_divisor(n, test_divisor + 1);
}

function divides(a, b) {
    return b % a === 0;
}

const square = x => x * x;

function is_prime(n) {
    return n === smallest_divisor(n);
}

function prime_only(xs) {
    return filter(x => is_prime(x) && x !== 1, xs);
}






//P8, TASK 4
const display = custom_display; // DO NOT EDIT.

// Calls display on every item in the list xs.
function traverse(xs) {
    return is_null(xs)
            ? null
            : pair(display(head(xs)),traverse(tail(xs)));
}

/*
const xs = list(1,2,3);
display(head(xs));
display(head(tail(xs)));
display(head(tail(tail(xs))));
*/






//P8, TASK 5
const display = custom_display; // DO NOT EDIT.

// Calls display on every item in the tree xs.
function traverse(xs) {
    // Modify this function to work on trees.
      if (is_null(xs)) {
            return null;
    } else if (is_list(xs)) {
            traverse(head(xs));
            traverse(tail(xs));
    } else {
            return display(xs);
    }
}