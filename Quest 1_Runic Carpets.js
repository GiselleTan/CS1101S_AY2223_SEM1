////////////////////////////////////////////////////////////////////
//QUEST 1: RUNIC CARPETS (XP: 475 / 400)
function persian(rune, count) {
    // your answer here
    return beside_frac(1 / count, stackn(count, rune),
    beside_frac(1 - 1 / (count - 1),
    
    stack_frac(1 - 1 / count,
    stack_frac(1 / (count - 1), besiden(count - 2, rune), make_cross(rune)), 
    besiden(count - 2, rune)),
    
    stackn(count, rune)));
}


function besiden(n, rune) {
    return(quarter_turn_right(turn_upside_down(stackn(n, quarter_turn_right(rune)))));
    return rune;
}

// Tests
show(persian(heart, 7));
show(persian(make_cross(rcross), 5));
const paw = from_url("https://i.imgur.com/GJg95B8.png");
show(persian(paw, 5));

//FEEDBACK:
//Holy cow. I would highly suggest declaring constants to improve readability, 
//it gets really difficult to follow what you are doing. 
//Why don't you try relooking at your code in 2 weeks and see if you still understand it. 
//That will explain why declaring constants will be better.

//Otherwise, good job.