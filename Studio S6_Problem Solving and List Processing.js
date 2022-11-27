//STUDIO S6: PROBLEM SOLVING AND LIST PROCESSING

//PROBLEM 1
function my_map(f, xs){
    return accumulate((x, y) => pair(f(x), y), null, xs);
}




//PROBLEM 2
function remove_duplicates(lst){
    return is_null(lst)
            ? null 
            : pair(head(lst), remove_duplicates(
                    filter(x => !equal(x, head(lst)),tail(lst))));
}





//PROBLEM 2
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));

        // Combinations that do not use the head coin 
        // for the remaining amount.
        const combi_B = makeup_amount(x - head(coins), tail(coins));

        // Combinations that use the head coin.
        const combi_C = map(m => pair(head(coins), m), combi_B);
        // pair(head(coins), combi_B)

        return append(combi_A, combi_C);
    }
}