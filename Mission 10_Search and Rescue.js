/////////////////////////////////////////////////////////////////////
//MISSION 10: SEARCH AND RESCUE (XP: 657 / 720)

//M10, TASK 1
function binary_search_tree_to_string(bst) {
    return is_empty_tree(bst)
            ? ""
            : binary_search_tree_to_string(left_branch(bst)) +
                entry(bst) + "; " +
                binary_search_tree_to_string(right_branch(bst));
}

const h = make_tree("h", make_empty_tree(), make_empty_tree());
const a = make_tree("a", make_empty_tree(), make_empty_tree());
const n = make_tree("n", h, make_empty_tree());
const c = make_tree("c", a, make_empty_tree());
const test_bst = make_tree("e", c, n);

// Test
binary_search_tree_to_string(test_bst);
binary_search_tree_to_string(cadet_names);






//////////////////////////////////////////////////
//M10, TASK 2
function find(bst, name) {
    return is_empty_tree(bst)
    ? false
    : equal(entry(bst), name)
    ? true
    : find(left_branch(bst), name) || 
        find(right_branch(bst), name);
}

// Test
find(cadet_names, "NAME HERE");

//FEEDBACK:
//Ah, I know you got the answer but the whole point of a binary tree 
//is to have the time complexity of search to be O(log n).
//Remember the lecture talks about finding the element by cutting the 
//search space in half. Right now your search complexity is O(2^n) 
//because you are searching every element. 
//Its a very recent lecture so i wont penalise too much, its tough!






//////////////////////////////////////////////////
//M10, TASK 3
function insert(bst, item) {
    return is_empty_tree(bst)
            ? make_tree(item, null, null)
            : item < entry(bst)
            ? make_tree(entry(bst), 
                        insert(left_branch(bst), item),
                        right_branch(bst))
            : make_tree(entry(bst), left_branch(bst),
                        insert(right_branch(bst), item));
}


// Copy your binary_search_tree_to_string function here from Task 1.
function binary_search_tree_to_string(bst) {
    return is_empty_tree(bst)
            ? ""
            : binary_search_tree_to_string(left_branch(bst)) +
                entry(bst) + "; " +
                binary_search_tree_to_string(right_branch(bst));
}

// Test
binary_search_tree_to_string(insert(make_empty_tree(), "x"));
// Should produce "x; "

const bst = accumulate((item, bst) => insert(bst, item),
                       make_empty_tree(),
                       list("g", "a", "r", "x", "p"));
binary_search_tree_to_string(bst);
// Should produce "a; g; p; r; x; "

const cadet_names_with_aaaaron =  insert(cadet_names, "AAAARON NORAAAA");
binary_search_tree_to_string(cadet_names_with_aaaaron);
// Should produce "AAAARON NORAAAA; ..."


//FEEDBACK:
//Good, only got 2 minor errors,

//1) never account for if the item is alr in the BST. 
//So i can insert multiple of the same element. 
//Just take note, the qn never ask to account for it so its fine, wont deduct!

//2) break the abstraction by inserting null, 
//you should maketree(item, makeemptytree(), makeempty_tree()) for your base case