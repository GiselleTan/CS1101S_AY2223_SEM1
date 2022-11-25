////////////////////////////////////////////////////////////
//PATH 11: MUTABLE DATA (XP: 175 / 150)

//P11, TASK 1
const x = 1;
x = 1;
x;
//Error, because it is trying to assign value to the constant x in the statement x = 1;





//P11, TASK 2
let x = 1;
x = x + 1;
x;
//2





//P11, TASK 3
let x = 1;
const y = x + 1;
x = x + 1;
y;
//2





//P11, TASK 4
let x = 1;
const y = () => x + 1;
x = x + 1;
y();
//3





//P11, TASK 5
let x = 0;

function fib(n) {
    x = x + 1;
    return n <= 1 ? n : fib(n - 2) + fib(n - 1);
}

fib(5);
x;
//15





//P11, TASK 6
const p = pair(1, 2);
p = pair(3, 4);
p;
//Error, because it is trying to assign a value to the constant p in the statement p = pair(3, 4);





//P11, TASK 7
let p = pair(1, 2);
const q = pair(3, p);
p = q;
p;
//[3, [1, 2]]





//P11, TASK 8
const p = pair(1, 2);
const q = pair(3, 4);
set_head(q, p);
q;
//[[1, 2], 4]





//P11, TASK 9
//Let us assume that a name my_p is declared using const my_p = pair(1, 2);. 
//Which of the following statements is false?
//Assignments to the name my_p are possible, using my_p = pair(3, 4);





//P11, TASK 10
function d_append(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else {
        set_tail(xs, d_append(tail(xs), ys));
        return xs;
    }
}
const L = list(1, 2, 3);
d_append(L, L);
//A cyclic list of elements 1, 2, 3