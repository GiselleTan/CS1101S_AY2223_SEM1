//STUDIO S4: TREE RECURSION

//PROBLEM 1
function choose(n, r) {
    return (n < 0 || r < 0) 
           ? 0
           : (r === 0) 
           : choose(n - 1, r - 1) + choose(n - 1, r);
}

function pascal(row,position){
    return choose(row,position);
}

pascal(4,2);