/////////////////////////////////////////////////////////////////////
//MISSION 6: BEYOND THE FIRST DIMENSION (XP: 840 / 800)

//M6, TASK 1
// feel free to add helper functions!

function fractal(level, transformation, curve) {
    // your answer here
    return level === 0 
                    ? curve
                    : transformation(fractal(level - 1,  transformation, curve));
}

function levycize(curve) {
    const f = math_sqrt(2) / 2;
    const scaled_curve = (scale(f, f, 1))(curve);
    return connect_rigidly(
        (rotate_around_origin(0, 0, math_PI / 4))(scaled_curve),
        (translate(0.5, 0.5, 0))
            ((rotate_around_origin(0, 0, -math_PI / 4))(scaled_curve)));
}

// Test
draw_connected_full_view_proportional(10000)
    (fractal(11, levycize, unit_line));



//////////////////////////////////////////////////
//M6, TASK 2
// copy your fractal function here
function fractal(level, transformation, curve) {
    return level === 0 
                    ? curve
                    : transformation(fractal(level-1,transformation,curve));
}

function dragonize(curve) {
    return put_in_standard_position(
                connect_ends(invert(
                rotate_around_origin(0, 0, - math_PI / 2)(curve)),curve)
                );
}

// Test
draw_connected_full_view_proportional(10000)
    (fractal(11, dragonize, unit_line));



//////////////////////////////////////////////////
//M6, TASK 3
function kochize(curve) {
    const up_60 = rotate_around_origin(0, 0, math_PI / 3);
    const down_60 = rotate_around_origin(0, 0, - math_PI / 3);
    return put_in_standard_position(
               connect_ends(curve,
                            connect_ends(up_60(curve),
                                         connect_ends(down_60(curve),
                                                      curve))));
}

// copy your fractal function here
function fractal(level, transformation, curve) {
    return level === 0 
                    ? curve
                    : transformation(fractal(level - 1, transformation, curve));
}

function snowflake(n) {
    const top = fractal(n,kochize,unit_line);
    const left = rotate_around_origin(0, 0,(2 * math_PI) / 3)(top);
    const right = rotate_around_origin(0, 0, (2 * -math_PI) / 3)(top);
    return connect_ends(left, connect_ends(top,right));
}

// Test
draw_connected_full_view_proportional(10000)(snowflake(5));