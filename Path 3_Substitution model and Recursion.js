////////////////////////////////////////////////////////////
//PATH 3: SUBSTITUTION MODEL AND RECURSION (XP: 175 / 150)

//P3, TASK 1
function sum_of_squares(x, y) {
    return square(x) + square(y);
}

function square(x) {
    return x * x;
}

sum_of_squares(5 + 1, 5 * 2)
square(5 + 1) + square(5 * 2)
(5 + 1) * (5 + 1) + square(5 * 2)
(5 + 1) * (5 + 1) + (5 * 2) * (5 * 2) 
//Normal order reduction




//P3, TASK 2
sum_of_squares(5 + 1, 5 * 2)
sum_of_squares(6, 10)
square(6) + square(10)
(6 * 6) + square(10)
36 + square(10)
//Applicative order reduction




//P3, TASK 3
//Javascript uses applicative order reduction




//P3, TASK 4
f(0.5)
f(0.5 + 0.25)
f(0.75)
f(0.75 + 0.125)
//Iterative process





//P3, TASK 5
f(0.5)
(0.5 + f(0.25))
(0.5 + (0.25 + f(0.125)))
(0.5 + (0.25 + (0.125 + f(0.0625))))
//Recursive process





//P3, TASK 6
const eps = 0.00001;
function f(x) {
    return x < eps 
        ? x 
        : x + f(x / 2); 
}

//produced:
f(0.5)
(0.5 + f(0.25))
(0.5 + (0.25 + f(0.125)))
(0.5 + (0.25 + (0.125 + f(0.0625))))





//P3, TASK 7
const eps = 0.00001;
function f(x) {
    return 1 - x < eps 
        ? x 
        : f(x + (1 - x) / 2); 
}

//produced:
f(0.5)
f(0.5 + 0.25)
f(0.75)
f(0.75 + 0.125)







//P3, TASK 8
function factorial(n) {
    return n === 1
           ? 1
           : n * factorial(n - 1);
    }
factorial(20);
//The program gives rise to a recursive process because deferred operations accumulate







//P3, TASK 9
function factorial(n) {
    return iter(1, 1, n);
  }
  function iter(product, counter, n) {
    return counter > n
           ? product
           : iter(counter * product,
                  counter + 1,
                  n);
  }
factorial(20);
//The program gives rise to an iterative process because no deferred operations accumulate