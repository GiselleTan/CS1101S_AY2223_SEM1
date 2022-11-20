//MISSIONS


/////////////////////////////////////////////////////////////////////
//MISSION 1: RUNE TRIALS (XP: 625/600)
//M1, TASK 1
function mirror(rune) {
    return beside(rune, flip_horiz(rune));
}


/*The function more_love takes a rune as
argument and returns a rune that shows
it next to a red heart.*/

function more_love(rune) {
    return beside(rune, red(heart));
}

show(more_love(mirror(sail)));

//////////////////////////////////////////////////
//M1, TASK 2
function mosaic(r1, r2, r3, r4) {
    return stack(beside(r4,r1),beside(r3,r2));
}

// Test
show(mosaic(rcross, sail, corner, nova));

//////////////////////////////////////////////////
//M1, TASK 3
function mosaic(r1, r2, r3, r4) {
    return stack(beside(r4,r1),beside(r3,r2));
}

function upside_down_mosaic(r1, r2, r3, r4) {
    return turn_upside_down(mosaic(r1, r2, r3, r4));
}

// Test
show(upside_down_mosaic(rcross, sail, corner, nova));

//////////////////////////////////////////////////
//M1, TASK 4
function mosaic(r1, r2, r3, r4) {
    return stack(beside(r4,r1),beside(r3,r2));
}

function transform_mosaic(r1, r2, r3, r4, transform) {
    return transform(mosaic(r1, r2, r3, r4));
}

// Test
show(transform_mosaic(rcross, sail, corner, nova, make_cross));



/////////////////////////////////////////////////////////////////////
//MISSION 2: RUNE READING (XP: 975/1000)
//M2, TASK 1
function fractal(pic, n) {
    // your answer here
    return n === 0 
            ? pic 
            : beside_frac(1 / n, pic, 
                    stack(fractal(pic, n - 1), fractal(pic, n - 1)));
} //

// Test
show(fractal(make_cross(rcross), 5));
//Feedback: I see what you are doing but the question is not asking you to scale each of the columns to be equal length. For each recursion, the rune gets scaled down by a factor of 1/2. so there is no real need to use beside_frac.


//////////////////////////////////////////////////
//M2, TASK 2
function hook(frac) {
    // your answer here
    return frac === 0 ? stack(square,blank) : 
    stack_frac(1/2,square,beside_frac(1-frac,blank,square));
}

// Test
show(hook(1/5));


//////////////////////////////////////////////////
//M2, TASK 3
function spiral(thickness, depth) {
    // your answer here
    return depth===0? blank:
    stack_frac(thickness,hook(thickness/2),
    (quarter_turn_right(spiral(thickness,depth-1))));
} 

//stack_frac(thickness,hook(thickness/2),blank)
//quarter_turn_right(spiral(thickness,depth-1))

// copy your hook function from Question 2 here if required
function hook(frac) {
    return frac === 0 ? stack(square,blank) : 
    stack_frac(1/2,square,beside_frac(1-frac,blank,square));
}

// Test
show(spiral(1/5, 20));
