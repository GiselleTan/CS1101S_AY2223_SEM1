////////////////////////////////////////////////////////////
//PATH 14: SEARCHING AND SORTING II; MEMOIZATION (XP: 215 / 190)

//P14, TASK 1
//What do we mean when we say that arrays are random access?
//Accessing any array element takes O(1) time




//P14, TASK 2
//Which one of the following statements about linear search (or sequential search) in arrays is correct?
//Linear search works on unsorted arrays




//P14, TASK 3
//Which one of the following statements about binary search in arrays is correct?
//In each step, binary search halves the remaining portion of the array that needs to be searched




//P14, TASK 4
function insertion_sort(A) {
    const len = array_length(A);

    for (let i = 1; i < len; i = i + 1) {
        let j = i - 1;
        while (j >= 0 && A[j] > A[j + 1]) {
            swap(A, j, j + 1);
            j = j - 1;
        }
    }
}

function swap(A, x, y) {
    const temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}
//In each run of the inner loop, insertion sort may swap two neighboring elements




//P14, TASK 5
function selection_sort(A) {
    const len = array_length(A);

    for (let i = 0; i < len - 1; i = i + 1) {
        let min_pos = find_min_pos(A, i, len - 1);
        swap(A, i, min_pos);
    }
}

function find_min_pos(A, low, high) {
    let min_pos = low;
    for (let j = low + 1; j <= high; j = j + 1) {
        if (A[j] < A[min_pos]) {
            min_pos = j;
        }
    }
    return min_pos;
}

function swap(A, x, y) {
    const temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}
//In each iteration of the for loop in function selection_sort, two elements may be swapped.




//P14, TASK 6
//Which one of the following statements about merge sort on arrays is not correct?
//Merge sort runs in O(n) time if the array is already sorted




//P14, TASK 7
//Which one of the following statements about memoization is correct?
//Memoization avoids repeated calculation of the result of a function applied to the same arguments.




//P14, TASK 8
function search_cond(A, cond) {
    let result = -1;
    
   for (let i = 0; i < array_length(A); i = i + 1){
       if (cond(A[i])) {
           result = i;
           break;
       }
   }
   
   return result;

}




//P14, TASK 9
function insert(A, pos, x) {
    for (let i = array_length(A); i > pos; i = i - 1){
        A[i] = A[i - 1];
    }
    A[pos] = x;
}




//P14, TASK 10
function insertion_sort(A) {
    let new_array = [];
    for (let i = 0; i < array_length(A); i = i + 1){
        let condition = x => x > A[i];
        let position = search_cond(new_array, condition);
        if (position !== -1){
            insert(new_array, position, A[i]);
        } else {
            new_array[i] = A[i];
        }
    }
    return new_array;
}