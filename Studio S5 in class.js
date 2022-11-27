//STUDIO S5 IN CLASS: 

//PROBLEM 1
function every_second(items){
    return is_null(items) || is_null(tail(items))
            ? null 
            : pair(head(tail(items)), every_second(tail(tail(items))));
}






//PROBLEM 2
//ITERATIVE SOLUTION
function sums(list_of_numbers){
    return sums_iter(list_of_numbers, 0, 0, 0);
}

function sums_iter(items, count, odd_sum, even_sum){
    return is_null(items)
            ? list(odd_sum,even_sum)
            : count % 2 === 0
            ? sums_iter(tail(items), count + 1, odd_sum + head(items), even_sum)
            : sums_iter(tail(items), count + 1, odd_sum, even_sum + head(items));
}



//RECURSIVE SOLUTION
function sums(xs){
    if (is_null(xs)) {
        return list(0, 0);
    } else if (is_null(tail(xs))) {
        return list(head(xs), 0);
    } else {
        const wish = sums(tail(tail(xs)));
        return list(head(xs) + head(wish), 
                        head(tail(xs)) + head(tail(wish)));
    }
        
}


//OTHER SOLUTION
function every_first(items){
    return is_null(items) || is_null(tail(items))
            ? null 
            : pair(head(items), every_second(tail(items)));
}

function sums(list_of_numbers){
    const odd = every_second(list_of_numbers);
    const even = every_first(list_of_numbers);
    const even_sum = accumulate((x, y) => x + y, 0, even);
    const odd_sum = accumulate((x, y) => x + y, 0, odd);
    return list(even_sum, odd_sum);
}