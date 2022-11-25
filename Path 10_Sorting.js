////////////////////////////////////////////////////////////
//PATH 10: SORTING (XP: 181 / 160)

//P10, TASK 1
//Consider the insertion_sort function you saw in the lecture. 
//What is the order of growth of insertion_sort in time if the input list is already in ascending order? 
//Let n be the length of the input list.
//O(n)




//P10, TASK 2
//Consider the insertion_sort function you saw in the lecture. 
//What is the order of growth of insertion_sort in time if the input list is in descending order? 
//Let n be the length of the input list.
//O(n^2)




//P10, TASK 3
//Consider the selection_sort function you saw in the lecture.
//What is the order of growth of selection_sort in time if the input list is already in ascending order? 
//Let n be the length of the input list.
//O(n^2)




//P10, TASK 4
//Consider the selection_sort function you saw in the lecture.
//What is the order of growth of selection_sort in time if the input list is already in descending order? 
//Let n be the length of the input list.
//O(n^2)




//P10, TASK 5
const xs = list(1, 3, 5, 7, 9);
const ys = list(8, 6, 4, 2);
//What is the result of merge(xs, ys)?
list(1, 3, 5, 7, 8, 6, 4, 2, 9);




//P10, TASK 6
//Consider the representation of sets using unordered lists and ordered lists. 
//Which representation is likely to be more efficient (in running time) for the operation add(e, S)? 
//We can assume that e is not in S before the operation.

//Unordered lists




//P10, TASK 7
//Consider the representation of sets using unordered lists and ordered lists. 
//Which representation is likely to be more efficient (in running time) for the operation union(S1, S2)?

//Ordered lists




//P10, TASK 8
//Consider the representation of sets using unordered lists and ordered lists. 
//Which representation is likely to be more efficient (in running time) for the operation intersection(S1, S2)?

//Ordered lists




//P10, TASK 9
// put the first n elements of xs into a list
function take(xs, n) {
    return n === 0
            ? null 
            : pair(head(xs),take(tail(xs), n - 1));
}

// drop the first n elements from list, return rest
function drop(xs, n) {
    return n === 0
            ? is_null(xs)
            ? null 
            : xs
            : drop(tail(xs), n - 1);
}




//P10, TASK 10
function min(a, b) {
    return a < b ? a : b;
}

// given a non-empty list xs, returns the smallest item in xs
function smallest(xs) {
    return is_null(tail(xs))
            ? head(xs)
            : min(head(xs), smallest(tail(xs)));
}




//P10, TASK 11
// removes the first instance of x from xs
function remove(x, xs) {
    return is_null(xs) || is_null(tail(xs))
            ? xs
            : head(xs) === x
            ? tail(xs)
            : pair(head(xs), remove(x, tail(xs)));
}




//P10, TASK 12
function selection_sort(xs) {
    if (is_null(xs)) {
        return null;
    } else {
        // We pick the smallest element, where should it go?
        // What should we recurse on?
        // YOUR SOLUTION HERE
        return pair(smallest(xs), selection_sort(remove(smallest(xs), xs)));
    }
}