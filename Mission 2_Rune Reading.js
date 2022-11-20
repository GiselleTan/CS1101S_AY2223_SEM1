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
