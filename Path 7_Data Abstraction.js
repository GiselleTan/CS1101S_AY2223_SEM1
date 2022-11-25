////////////////////////////////////////////////////////////
//PATH 7: DATA ABSTRACTION (XP: 221 / 210)

//P7, TASK 1
function quad(a, b, c, d) {
    return k =>
        k === 1
        ? a
        : k === 2
        ? b
        : k === 3
        ? c
        : k === 4
        ? d
        : "bad input"
    }
}

function get_element(q, k) {
    // missing statement
}

const my_quad = quad("cat", "dog", "emu", "fish");

get_element(my_quad, 3);    // returns "emu"
get_element(my_quad, 4);    // returns "fish"
get_element(my_quad, 1);    // returns "cat"
get_element(my_quad, 2);    // returns "dog"
get_element(my_quad, 0);    // returns "bad input"

//return q(k);






//////////////////////////////////////////////////////
//P7, TASK 2
//Which of these expressions creates a pair with the values 3 and 6, in that order?
pair(3, 6);






//////////////////////////////////////////////////////
//P7, TASK 3
const what = pair("yes", "no");
//Which of these expressions selects the "no" value in what?
//tail(what)






//////////////////////////////////////////////////////
//P7, TASK 4
//Which of these expressions creates a list of 3, 4 and 5, in that order?
pair(3, pair(4, pair(5, null)));






//////////////////////////////////////////////////////
//P7, TASK 5
const what = pair(pair(3, 4), pair(pair(5, 6), null));
length(what);
//2






//////////////////////////////////////////////////////
//P7, TASK 6
//Which of these expressions evaluates to [[2, 3], [4, null]] in box notation?
pair(pair(2, 3), list(4))






//////////////////////////////////////////////////////
//P7, TASK 7
/* You can use only the following pre-declared functions in your solution:
- `make_rat`
- `numer`
- `denom`
- `add_rat`
- `sub_rat`
- `mul_rat`
- `div_rat`
- `equal_rat`
- `gcd`
*/

// Given two rational numbers rat1, rat2,
// return true iff rat1 <= rat2.

function lte(rat1, rat2) {
    return numer(rat1) / denom(rat1) <= numer(rat2) / denom(rat2);
}






//////////////////////////////////////////////////////
//P7, TASK 8
//gte(x, y) which determines if x >= y
function gte(x, y) {
    return !lte(x,y-1); 
}

//eq(x, y) which determines if x === y
function eq(x, y) {
    return !lte(x, y - 1) && lte(x, y);
}

//lt(x, y) which determines if x < y
function lt(x, y) {
    return lte(x, y - 1);
}

//gt(x, y) which determines if x > y
function gt(x, y) {
    return !lte(x, y);
}






//////////////////////////////////////////////////////
//P7, TASK 9
/* For reference:

function length(xs) {
    return is_null(xs) ? 0 : 1 + length(tail(xs));
}
*/

// Given a list of numbers xs,
// return the sum of all numbers in xs.

function sum(xs) {
    return is_null(xs) ? 0 : head(xs) + sum(tail(xs));
}