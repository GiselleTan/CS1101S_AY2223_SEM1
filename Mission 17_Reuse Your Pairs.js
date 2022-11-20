/////////////////////////////////////////////////////////////////////
//MISSION 17: REUSE YOUR PAIRS (XP: 1004 / 1000)

//M17, TASK 1
function d_split_list(xs) {
    let mid = length(xs) % 2 === 0 
                ? length(xs) / 2 
                : math_ceil(length(xs) / 2);
    let new_list = xs;
    
    for (let i = 0; i < mid - 1; i = i + 1) {
        new_list = tail(new_list);
    }
    
    let new_tail = tail(new_list);
    set_tail(new_list, null);

    return pair(xs, new_tail);
}

// TEST:
//const my_list1 = list(1, 2, 3, 4, 5, 6);
//const my_list2 = list(5, 4, 3, 2, 1);
//d_split_list(my_list1);
//d_split_list(my_list2);


/*
    const mid = math_floor(length(xs) / 2);
    const mid1 = math_ceil(length(xs) / 2);
    
    let new_head = list();
    let new_tail = list();
    
    for (let i = 0; i < mid1; i = i + 1){
        let element = list(list_ref(xs, i));
        new_head = append(new_head, element);
    }
    
    for (let i = mid1; i < length(xs); i = i + 1){
        let element = list(list_ref(xs, i));
        new_tail = append(new_tail, element);
    }
    
    return pair(new_head, new_tail);
*/





//////////////////////////////////////////////////
//M17, TASK 2
function d_merge(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else {
        if (head(xs) < head(ys)) {
            set_tail(xs, d_merge(tail(xs), ys));
            return xs;
        } else {
            set_tail(ys, d_merge(xs, tail(ys)));
            return ys;
        }
    }
}

// TEST:
const my_list1 = list(2, 4, 5, 9);
const my_list2 = list(3, 5, 8);
d_merge(my_list1, my_list2);

/*
function merge(xs, ys){
return is_null(xs)
        ? ys 
        : is_null(ys)
        ? xs 
        ? head(xs) > head(ys)
        ? pair(head(ys), merge(xs, tail(ys)))
        : pair(head(xs), merge(tail(xs), ys));
}
*/

/*
    return is_null(xs)
        ? ys
        :is_null(xs)
        ? ys
        : head(xs) >= head(ys)
        ? set_tail(ys, d_merge(xs,tail(ys)))
        : set_tail(xs, d_merge(tail(xs),ys));
*/





//////////////////////////////////////////////////
//M17, TASK 3
// Copy-and-paste your d_split_list function for Task 1 here.
function d_split_list(xs) {
    let mid = length(xs) % 2 === 0 
                ? length(xs) / 2 
                : math_ceil(length(xs) / 2);
    let new_list = xs;
    
    for (let i = 0; i < mid - 1; i = i + 1) {
        new_list = tail(new_list);
    }
    
    let new_tail = tail(new_list);
    set_tail(new_list, null);

    return pair(xs, new_tail);
 }


// Copy-and-paste your d_merge function for Task 2 here.
function d_merge(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else {
        if (head(xs) < head(ys)) {
            set_tail(xs, d_merge(tail(xs), ys));
            return xs;
        } else {
            set_tail(ys, d_merge(xs, tail(ys)));
            return ys;
        }
    }
}

function d_merge_sort(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        const split_list = d_split_list(xs);
        const front = head(split_list);
        const back = tail(split_list);
        return d_merge(d_merge_sort(front),
                                d_merge_sort(back));
    }
}

// TEST:
const my_list = list(7, 2, 4, 6, 9, 1, 5, 8, 3, 6);
d_merge_sort(my_list);