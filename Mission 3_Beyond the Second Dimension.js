/////////////////////////////////////////////////////////////////////
//MISSION 3: BEYOND THE SECOND DIMENSION (XP: 841/800)
//M3, TASK 1
function steps(r1, r2, r3, r4){
    //return overlay(overlay(overlay(r4,r3),r2),r1);
    return overlay( mosaic(blank, blank, blank, r4),
                    overlay(mosaic(blank, blank, r3, blank),
                    overlay(mosaic(blank, r2, blank, blank),
                    mosaic(r1, blank, blank, blank))));
}

function mosaic(r1, r2, r3, r4) {
    return stack(beside(r4,r1),beside(r3,r2));
}

// Tests
show(steps(rcross, triangle, corner, nova));
hollusion(steps(rcross, triangle, corner, nova));



////////////////////////////////////////////////////////////
//M3, TASK 2
function cone(n, rune){
    return n === 0
            ? blank
            : overlay_frac(1 - 1 /n , 
                            scale((1 / n) - 1, 
                                    cone(n - 1, rune)), rune);
}

// Tests
show(cone(4, circle));
hollusion(cone(15, circle));

/*return n === 0? blank:
overlay(overlay(overlay(scale(1/n,rune),scale(2/n,rune)),
scale(3/n,rune)),
    rune);*/
    
//overlay_frac(1/n,scale(1/n,rune),cone(n-1,rune))


