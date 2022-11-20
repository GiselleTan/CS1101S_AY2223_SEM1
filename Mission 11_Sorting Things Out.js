/////////////////////////////////////////////////////////////////////
//MISSION 11: SORTING THINGS OUT (XP: 1021 / 950)

//M11, TASK 1
function partition(xs, p) {
    return pair(filter(x => x <= p, xs),
                filter(x => x > p, xs));
}

// Test
//const my_list = list(1, 2, 3, 4, 5, 6);
//partition(my_list, 4);






//////////////////////////////////////////////////
//M11, TASK 2
function partition(xs, p) {
    return pair(filter(x => x <= p, xs),
                filter(x => x > p, xs));
}

function quicksort(xs) {
    return is_null(xs)
            ? null
            : append(quicksort(head(
                        partition(tail(xs), head(xs)))),
                    pair(head(xs),quicksort(tail(
                        partition(tail(xs), head(xs))))));
}

// Test
// const my_list = list(23, 12, 56, 92, -2, 0);
// quicksort(my_list);






//////////////////////////////////////////////////
//M11, TASK 3
//What is the order of growth in time for applying partition to a list of length n?
//ANSWER: 0(n)






//////////////////////////////////////////////////
//M11, TASK 4
//What is the order of growth in time for applying quicksort to an already sorted list of length n?
//ANSWER: 0(n^2)






//////////////////////////////////////////////////
//M11, TASK 5
//For lists of length n, the performance of quicksort may vary. 
//Let f(n) be the fastest running time of quicksort for any list with length n. 
//What is the order of growth of the function f(n), using Θ notation?
//ANSWER: 0(n log n)