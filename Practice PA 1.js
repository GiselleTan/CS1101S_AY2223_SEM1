//PRACTICE PRACTICAL ASSESSMENT 1
//TASK 1A (PASSED HALF OF TESTCASES)
const klist0 = 234;  // k-list of depth 0

const klistA = list(0, 6, 3, 1);  // k-list of degree 4 and depth 1

const klistB = list(list(0, 6, 3), list(8, 6, 10), list(5, 1, 25));
               // k-list of degree 3 and depth 2

const klistC = list(list(list(1, 2), list(3, 4)),
                    list(list(5, 6), list(7, 8)));
               // k-list of degree 2 and depth 3



function make_k_list(k, d) {
    function helper(a){
        return a === 0
                ? null 
                : pair(0, helper(a - 1));
    }
    const each = helper(k);
    function helper2(b) {
        return b === 0
                ? null 
                : pair(each, helper2(b - 1));
    }
    return d === 0
            ? 0
            : helper2(d + 1);
}

//make_k_list(4, 1);
//make_k_list(3, 2);
make_k_list(2, 3);







/////////////////////////////////////////////////////////////////////
//TASK 1B
const klistB = list(list(0, 6, 3), list(8, 6, 10), list(5, 1, 25));
sum_k_list(klistB); // returns 64



function sum_k_list(klist) {
    
}

//TESTCASE
//sum_k_list(123);
sum_k_list(list(1, 2, 3, 4, 5)); //15
sum_k_list(list(list(0, 6, 3), list(8, 6, 10), list(5, 1, 25)));







/////////////////////////////////////////////////////////////////////
//TASK 1C (PASSED ALL TEST CASES)
const klistB = list(list(0, 6, 3), list(8, 6, 10), list(5, 1, 25));
map_k_list(x => 2 * x, klistB);
// returns list(list(0, 12, 6), list(16, 12, 20), list(10, 2, 50))


function map_k_list(f, klist) {
    return is_number(klist)
        ? f(klist)
        : map(x => is_list(x) ? map_k_list(f, x) : f(x), klist);
    
}







/////////////////////////////////////////////////////////////////////
//TASK 2A (PASSED ALL TEST CASES)
const mat = [[0, 1, 2, 3],
             [2, 0, 5, 6],
             [3, 3, 0, 4],
             [4, 4, 5, 0]];
const route = list(2, 1, 3, 1);
route_distance(mat, route); // returns 13 (= 3 + 6 + 4)


function route_distance(mat, route) {
    const len = length(route);
    function helper(from, to, sum){
        return is_null(to)
                ? sum
                : helper(head(to), tail(to), sum + mat[from][head(to)]);
    }
    return helper(head(route), tail(route), 0);
}

route_distance([[0, 1, 2],
                [3, 0, 4],
                [5, 7, 0]], [2, [1, null]]);







/////////////////////////////////////////////////////////////////////
//TASK 2B (PASSED ALL TEST CASES)
const mat = [[0, 1, 2, 3],
             [2, 0, 5, 6],
             [3, 3, 0, 4],
             [4, 4, 5, 0]];
const n = array_length(mat);
shortest_paper_route(n, mat, 1);
    // returns pair(list(1, 0, 2, 3, 1), 12)


// The route_distance function for the preceding task has been
// pre-declared here for you to use in this task.
// Do not declare your own route_distance function.
/*
function route_distance(mat, route) {
    // Pre-declared
}
*/

function shortest_paper_route(n, mat, start) {

    // You can keep, modify or remove the permutations function.
    function permutations(ys) {
        return is_null(ys)
            ? list(null)
            : accumulate(append, null,
                map(x => map(p => pair(x, p),
                             permutations(remove(x, ys))),
                    ys));
    }
    function helper(a){
        return a === -1
                ? null 
                : pair(a, helper(a - 1));
    }
    const routes = permutations(helper(n - 1));
    const filtered_routes = filter(x => head(x) === start, routes);
    const types_routes = map(x => append(x, list(start)), filtered_routes);
    const distance = map(x => route_distance(mat, x), types_routes);
    
    function shortest(len, xs){
        return is_null(xs)
                ? len
                : head(xs) >= len
                ? shortest(len, tail(xs))
                : shortest(head(xs), tail(xs));
    }
    const min = shortest(head(distance), distance);

    function position(pos, a){
        const len = length(distance);
        return is_null(a)
                ? null
                : head(a) === min
                ? pos
                : position(pos + 1, tail(a));
    }
    return pair(list_ref(types_routes, position(0, distance)), min);

}

//TESTCASE
shortest_paper_route(4, [[0, 1, 2, 3], 
                        [2, 0, 5, 6], 
                        [3, 3, 0, 4],
                        [4, 4, 5, 0]], 1);







/////////////////////////////////////////////////////////////////////
//TASK 3A (FAILED ALL TEST CASES)
const bae = [ [8, "-", 2], "*", [7, "+", 3] ];
make_postfix_exp(bae);  // returns [8, 2, "-", 7, 3, "+", "*"]



function make_postfix_exp(bae) {

    function helper(a, lengths){
        const len = array_length(a);
        for (let i = 0; i < len; i = i + 1){
            let pos = array_length(lengths);
            display(a[i]);
            if(is_array(a[i])){
                return helper(a[i], lengths);
            } else {
                if (is_number(a[i])){
                    lengths[pos] = a[i];
                } else {
                    lengths[len - 1] = a[i];
                }
            }
        }
        return lengths;
    }

    return helper(bae, []);

}

const bae = [ [8, "-", 2], "*", [7, "+", 3] ];
make_postfix_exp(bae);  // returns [8, 2, "-", 7, 3, "+", "*"]







/////////////////////////////////////////////////////////////////////
//TASK 3B (FAILED ALL TEST CASES)
const pfe = [8, 2, "-", 7, 3, "+", "*"];
eval_postfix_exp(pfe);  // returns 60