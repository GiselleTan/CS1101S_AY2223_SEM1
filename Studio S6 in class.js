//STUDIO S6 IN CLASS: PROBLEM SOLVING AND LIST PROCESSING

//PROBLEM 1
remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
  // Result: list(4, 3, 1, 2)
  remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
  // Result: list("a", "x", "c", "b", "d")

function remove_duplicates(lst){
    return accumulate((x, y) => pair(x, 
                                filter(item => !equal(item, x), y)),
                                null, lst);
}

//ALTERNATIVE SOLUTION
function remove_duplicates(lst){
    return accumulate((x, xs) => 
                        is_null(member(x, xs))
                            ? pair(x, xs)
                            : xs,
                    null,
                    lst);
}



//PROBLEM 2
subsets(list(1, 2, 3));
  // Result: list(list(),
  //              list(1), list(2), list(3),
  //              list(1,2), list(1,3), list(2,3),
  //              list(1,2,3))

function subsets(xs){
    return accumulate(
        (x, ss) => append(ss, map(s => pair(x, s), ss)),
        list(null),
        xs);
}



//PROBLEM 3
permutations(list(1, 2, 3));
  // Result: list(list(1,2,3), list(1,3,2),
  //              list(2,1,3), list(2,3,1),
  //              list(3,1,2), list(3,2,1))

function permutations(s){
    return is_null(s)
            ? list(null)
            : accumulate(append, null, 
                        map(x => map(p => pair(x, p), 
                        permutations(remove(x, s)), s)))
}