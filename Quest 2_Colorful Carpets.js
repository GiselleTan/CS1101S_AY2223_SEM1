////////////////////////////////////////////////////////////////////
//QUEST 2: COLORFUL CARPETS (XP: 575 / 600)

//Q2, TASK 1
function besiden(n, rune) {
    return n === 1
            ? rune
            : beside_frac(1 / n, rune, besiden(n - 1, rune));
}

// Test
show(besiden(7, heart));




////////////////////////////////////////////////////
//Q2, TASK 2
function besiden(n, rune) {
    return n === 1? rune:
    beside_frac(1/n,rune,besiden(n-1,rune));
}


function carpet(n, m, rune) {
    return stackn(n,besiden(m,rune));
}

// Test
show(carpet(7, 5, heart));





////////////////////////////////////////////////////
//Q3, TASK 3





////////////////////////////////////////////////////
//Q3, TASK 4
function besiden(n, rune) {
    return n === 0? rune:
    beside_frac(1/n,random_color(rune),besiden(n-1,rune));
}

function randomly_colored_carpet(n, m, rune) {
    return n === 0? rune: 
    stack_frac(1/n,besiden(m,rune),randomly_colored_carpet(n-1,m,rune));
}

// Test
show(randomly_colored_carpet(10, 10, heart));
// should produce a carpet as shown in the title picture of this quest.
