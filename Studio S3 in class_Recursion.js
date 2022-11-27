//STUDIO S3-IN-CLASS: RECURSION; ITERATIVE AND RECURSIVE PROCESSES

//PROBLEM 1
function moony_1 (bottom_right){
    return beside(stack(circle, square), stack(blank, bottom_right));
}



//PROBLEM 2
function moony_2 (n) {
    return n === 0
              ? circle
              : moony_1(moony_2(n - 1));
}



//PROBLEM 3
function moony(n){

}