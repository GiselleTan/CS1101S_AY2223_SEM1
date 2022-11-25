////////////////////////////////////////////////////////////
//PATH 2: RUNOLOGY (XP: 135 / 110)

//P2, TASK 1
//no




//P2, TASK 2
import { heart, blue, red, stack } from "rune";

stack(blue(heart), red(heart));
//NO




//P2, TASK 3
import { heart, blue, red, show } from "rune";

show(blue(heart));
const x = 2;
show(red(heart));
x + 3;
//Both the blue heart and red heart runes are viewable and either can be selected to be displayed.




//P2, TASK 4
function love(rune) {
    return (stack(red(heart),rune));
    return rune;
}

show(love(blue(nova)));




//P2, TASK 5
function besiden(n, rune) {
    return(quarter_turn_right(turn_upside_down(stackn(n,quarter_turn_right(rune)))));
    return rune;
}

show(besiden(5, heart));




//P2, TASK 6
import { heart, nova, beside, stackn, show } from "rune";

function fancy(x) {
    return stackn(4, beside(x, nova));
}

show(fancy(heart));
//4 hearts are shown