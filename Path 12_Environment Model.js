////////////////////////////////////////////////////////////
//PATH 12: ENVIRONMENT MODEL (XP: 235 / 210)

//P12, TASK 1
//An environment is a sequence of frames


//P12, TASK 2
//A frame is a set of name bindings


//P12, TASK 3
//The process of looking up a variable in an environment starts with the current frame. What happens when the variable is not found in that frame?
//The interpreter looks up the variable in the frame that is enclosing the current frame.


//P12, TASK 4
//The process of looking up a variable in an environment may end up looking up the variable in the frame of the global environment. What happens when the variable is not found in that frame?
//The interpreter issues an error message "Name not declared".


//P12, TASK 5
//Consider the evaluation of a function application such as f(y, true, g(3)) during the evaluation of a Source program. Before the body of the function f is called, the argument expressions are evaluated. What environment is used, in order to evaluate the arguments y and g(3)?
//The interpreter uses the same environment in which the function application is evaluated


//P12, TASK 6
//Consider the evaluation of a function application such as f(y, true, g(3)) during the evaluation of a Source program. In order to evaluate the function application, the body block of the function f will need to be evaluated. What environment is used in order to evaluate the body block of f?
//The interpreter uses a new environment, which results from extending the environment stored in the function object that the name f refers to


//P12, TASK 7
//Before a function body block gets evaluated, the interpreter creates a new environment that results from extending the environment stored in the function object. The extending of the environment adds a new frame. What names are put in this new frame?
//Only the parameters of the function being called


//P12, TASK 8
//When an assignment statement x = <expression>; gets evaluated, the current value of the variable gets replaced by a new value in a frame. In which frame does this happen?
//In the current frame if it has a binding of x or the closest surrounding frame has a binding of x.


//P12, TASK 9
//When a statement such as f = x => x * x; gets evaluated, a function object gets created. The function object contains its definition (parameters and body) and its environment. What environment is contained in the function object?
//The environment in which the statement gets evaluated.


//P12, TASK 10
x => x + 1;

function funA(n) {
    return n <= 1 ? n : funA(n - 1) + funA(n - 2);
}
const aa = funA(4);
//There are 2 bindings in the program environment frame


//P12, TASK 11
//There are 10 environment frames (excluding global environment) created during the evaluation.


//P12, TASK 12
//Of the environment frames that get created during the evaluation of the program, 9 extend the program environment directly.



//P12, TASK 13
function ff(xx) {
    function gg(yy) {
        return xx * yy;
    }
    return gg;
}
const aa = ff(1)(6);
const bb = ff(2)(5);
ff(aa)(bb);
//4 Function objects get created during the evaluation of the program



//P12, TASK 14
//10 environment frames get created during the evaluation of the program



//P12, TASK 15
//Of the environment frames that get created during the evaluation of the program, 3 extend the program environment directly.