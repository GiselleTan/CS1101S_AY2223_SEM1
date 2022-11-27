//PRACTICE PRACTICAL ASSESSMENT 2
//TASK 1A (PASSED ALL TESTCASES)
delta_encode(null);
// returns null

delta_encode(list(9));
// returns list(9)

delta_encode(list(3,4,6,-2,-2));
// returns list(3,1,2,-8,0)


function delta_encode(L) {
    let pointer = L;
    function helper(xs){
        return is_null(tail(xs))
                ? null
                : pair(head(tail(xs)) - head(xs), 
                        helper(tail(xs)));
    }
    return is_null(L) 
            ? null 
            : pair(head(L), helper(pointer));
}







///////////////////////////////////////////////////////////
//TASK 1B (PASSED ALL TESTCASES)
delta_decode(null);
// returns null

delta_decode(list(9));
// returns list(9)

delta_decode(list(3,1,2,-8,0));
// returns list(3,4,6,-2,-2)


function delta_decode(D) {

    function helper(xs, count){
        return is_null(xs)
                ? null 
                : pair(head(xs) + count, helper(tail(xs), count + head(xs)));
    }
    return is_null(D)
            ? null 
            : pair(head(D), helper(tail(D), head(D)));

}







///////////////////////////////////////////////////////////
//TASK 2A (PASSED ALL TESTCASES)
runlength_encode(null);
// returns null

runlength_encode(list(9));
// returns list(9)

runlength_encode(list(6,5,5,9,7,7,5,5,5));
// returns list(6, [5,2], 9, [7,2], [5,3])


function runlength_encode(L) {
    function helper(xs, count){
        if (is_null(xs)){
            return null;
        } 
        else if (is_null(tail(xs))){
            if (count >= 2){
                return pair(pair(head(xs), count), helper(tail(xs), 1));
            } 
            return pair(head(xs), helper(tail(xs), count));
        } 
        else if (head(xs) === head(tail(xs))){
            return helper(tail(xs), count + 1);
            
        } else {
            if (count >= 2){
                return pair(pair(head(xs), count), helper(tail(xs), 1));
            } 
            return pair(head(xs), helper(tail(xs), count));
        }
    }
    
    return is_null(L)
            ? null 
            : helper(L, 1);

}
//runlength_encode(list(9, 9, 1));
runlength_encode(list(6, 5, 5, 9, 7, 7, 5, 5, 5));







///////////////////////////////////////////////////////////
//TASK 2B (PASSED ALL TESTCASES)
runlength_decode(null);
// returns null

runlength_decode(list(9));
// returns list(9)

runlength_decode(list(6, pair(5,2), 9, pair(7,2), pair(5,3)));
// returns list(6,5,5,9,7,7,5,5,5)


function runlength_decode(R) {
    function helper(xs){
        if (is_null(xs)){
            return null;
        } else if (is_pair(head(xs))) {
            let count = tail(head(xs));
            function counter(ys ,count){
                if (count !== 0){
                    return pair(ys, counter(ys, count - 1));
                } else {
                    return helper(tail(xs));
                }
            }
            return counter(head(head(xs)), count);
        } else {
            return pair(head(xs), helper(tail(xs)));
            } 
        }
    return is_null(R)
            ? null 
            : helper(R);
}

runlength_decode(list(6, [5, 2], 9, [7, 2], [5, 3]));







///////////////////////////////////////////////////////////
//TASK 3A (PASSED 4 OUT OF 5 TESTCASES)
const aar1 = list(2, 3, 10, 15);
const aar2 = list(1, 4, 20, 8 );
smallest_bounding_AAR_area( list(aar1, aar2) );
// returns 300  (the smallest bounding AAR is list(1, 3, 20, 15))


// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function smallest_bounding_AAR_area(rs) {
    if (is_null(rs)) {
        return 0;
    } else if (is_null(tail(rs))){
        return get_width(head(rs)) * get_height(head(rs));
    } else {
        let w = get_width(head(rs)) >= get_width(head(tail(rs))) ? get_width(head(rs)) : get_width(head(tail(rs)));
        let h = get_height(head(rs)) >= get_height(head(tail(rs))) ? get_height(head(rs)) : get_height(head(tail(rs)));
        return w * h;
    }
}

smallest_bounding_AAR_area(list(list(2, 3, 10, 15)));







///////////////////////////////////////////////////////////
//TASK 3B (PASSED 4 OUT OF 5 TESTCASES)
const aar1 = list(2, 3, 10, 15);
const aar2 = list(1, 4, 20, 8 );
optimized_smallest_bounding_AAR_area( list(aar1, aar2) );
// returns 200


// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function optimized_smallest_bounding_AAR_area(rs) {
    function helper(xs){
        if(is_null(xs)){
            return null;
        } else {
            const width = get_width(head(xs));
            const height = get_height(head(xs));
            return width > height
                ? pair(list(0, 0, width, height), helper(tail(xs)))
                : pair(list(0, 0, height, width), helper(tail(xs)));
            }
        }
    
    function smallest_bounding_AAR_area(rs) {
        if (is_null(rs)) {
            return 0;
        } else if (is_null(tail(rs))){
            return get_width(head(rs)) * get_height(head(rs));
        } else {
            
            let w = get_width(head(rs)) >= get_width(head(tail(rs))) 
                    ? get_width(head(rs)) : get_width(head(tail(rs)));
            let h = get_height(head(rs)) >= get_height(head(tail(rs))) 
                    ? get_height(head(rs)) : get_height(head(tail(rs)));
            return w * h;
        }
    }
    return smallest_bounding_AAR_area(helper(rs));
    
}







///////////////////////////////////////////////////////////
//TASK 3C (PASSED 9 OUT OF 10 TESTCASES)
overlap_area( list(10, 20, 30, 60), list(40, 10, 50, 15) );
// returns 0

overlap_area( list(10, 20, 30, 60), list(10, 10, 50, 15) );
// returns 150

overlap_area( list(10, 20, 30, 60), list(0, 40, 50, 15) );
// returns 450

overlap_area( list(10, 20, 30, 60), list(-25, 75, 50, 15) );
// returns 75


// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);


function overlap_area(aar1, aar2) {
    function helper(start1, end1, start2, end2){
        if (start1 >= start2){
            if (end1 >= end2){
                return end2 - start1;
            } else {
                return end1 - start1;
            }
        } else if (start1 <= start2){
            if (end1 <= end2){
                return end1 - start2;
            } else {
                return end2 - start2;
            }
        } 
    }
    const w = helper(get_x(aar1), get_x(aar1) + get_width(aar1),
                    get_x(aar2), get_x(aar2) + get_width(aar2));
    const h = helper(get_y(aar1), get_y(aar1) + get_height(aar1),
                    get_y(aar2), get_y(aar2) + get_height(aar2));
    return w * h;
}
