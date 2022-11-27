//STUDIO S2: SOURCE ACADEMY BURGER JOINT

//PROBLEM 1
function biggie_size(combo){
    return combo > 0 && combo < 5
                ? combo + 4
                : "already biggie";
}




//PROBLEM 2
function unbiggie_size(size){
    return size > 4 && size < 9
            ? size - 4
            : "already regular";
}




//PROBLEM 3
function is_biggie_size(combo){
    return combo > 4;
}




//PROBLEM 4
function combo_price(combo){
    return is_biggie_size(combo)
            ? (unbiggie_size(combo) * 1.17) + 0.50
            : combo * 1.17;
}




//PROBLEM 5
function empty_order(){
    return 0;
}




//PROBLEM 6
function add_to_order(order, combo){
    return (order * 10) + combo;
}
add_to_order(1, 2); //returns 12




//PROBLEM 7
function last_combo(order){
    return math_floor(order % 10);
}
last_combo(321); //returns 1




//PROBLEM 8
function other_combos(order){
    return math_floor(order / 10);
}
other_combos(321); //returns 32