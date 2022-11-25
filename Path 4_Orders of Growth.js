////////////////////////////////////////////////////////////
//PATH 4: ORDERS OF GROWTH (XP: 185 / 160)

//P4, TASK 1
//Consider the function t(n) to represent the number of times 
//the following factorial function calls itself recursively 
//after it is called with a positive integer n as argument.
function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}
//The function t has order of growth of O(n)




//P4, TASK 2
//Consider the function s(n) to represent the largest number of 
//deferred multiplications that occur in the process resulting from
//applying the following function to a positive integer n as argument
function factorial(n) {
    return n === 1 ? 1 : n * factorial(n - 1);
}
//The function s has order of growth of O(n)




//P4, TASK 3
//Consider the function t(n) to represent the number of times 
//the following function f calls itself recursively after foo 
//is called with a positive integer n as argument.
function f(n, k, x, y) {
    return k > n ? y : f(n, k + 1, y, x + y);
}

function foo(n) {
    return n < 2 ? n : f(n, 2, 0, 1);
}
//The function t has order of growth of O(n)




//P4, TASK 4
//Consider the function s(n) to represent the largest number of 
//deferred additions that occur in the process resulting from 
//applying the following function foo to a positive integer n as argument.
function f(n, k, x, y) {
    return k > n ? y : f(n, k + 1, y, x + y);
}

function foo(n) {
    return n < 2 ? n : f(n, 2, 0, 1);
}
//The function s has order of growth of O(1)
//No deferred operations accumulate here





//P4, TASK 5
//Consider the function t(n) to represent the number of times the 
//following function fib calls itself recursively after it is called 
//with a positive integer n as argument.
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
//The function t has order of growth of O(2^n)





//P4, TASK 6
// a is any number.
// n is a natural number (i.e. 1, 2, 3, ...)
function f(a, n) {
    return n === 1
           ? a
           : a + f(a, n - 1);
}
//a * n





//P4, TASK 7
// a is any number.
// n is a natural number (i.e. 1, 2, 3, ...)
function f(a, n) {
    return n === 1
           ? a
           : a + f(a, n - 1);
}
//Consider the function t(n) to represent the number of times the 
//following function f calls itself recursively when f(a, n) is called.
//The function t has order of growth of O(n)





//P4, TASK 8
//Suppose that we restrict n to powers of two (i.e. 1, 2, 4, 8, 16, …).
// a is any number.
// n is a power of two (i.e. 1, 2, 4, 8, 16, ...)

function f(a, n) {
    return n === 1
           ? a
           : f(2 * a, n / 2);
}
//Consider the function t(n) to represent the number of times the 
//following function f calls itself recursively when f(a, n) is called.
//The function t has order of growth of O(log n)