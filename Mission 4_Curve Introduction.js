/////////////////////////////////////////////////////////////////////
//MISSION 4: CURVE INTRODUCTION (XP: 764 / 700)

//M4, TASK 1
// Part 1
//The type of unit_line_at is curve.

// Part 2
function vertical_line(pt, length) {
    return t => make_point(x_of(pt), y_of(pt) + t * length);
}


// Part 3
//The type of vertical_line is curve.


// Part 4
// your answer here
draw_connected(1)(vertical_line(make_point(1/2,1/4),1/2));



//////////////////////////////////////////////////
//M4, TASK 2
function three_quarters(pt) {
    return t => 
            make_point(math_cos(2 * math_PI * 0.75 * t) + x_of(pt),
                        math_sin(2 * math_PI * 0.75 * t) + y_of(pt));
}

// Test
draw_connected_full_view_proportional(200)(three_quarters(make_point(0.5, 0.25)));
//draw_connected(200)(three_quarters(make_point(0.5, 0.25)));
// want t to be t<=0.75



//////////////////////////////////////////////////
//M4, TASK 3
function s_generator(pt) {
    return t => {
        return t <= 0.5
        ? make_point(
                math_cos(2 * math_PI * 0.75 * t * 2) + x_of(pt),
                math_sin(2 * math_PI * 0.75 * t * 2) + y_of(pt) + 1
        )
        :make_point(
                math_sin(2 * math_PI * 0.75 * (t-0.5) * 2) + x_of(pt),
                math_cos(2 * math_PI * 0.75 * (t-0.5) * 2) + y_of(pt) - 1
        );
    };
}

// Test
draw_connected_full_view_proportional(200)(s_generator(make_point(0.5, 0.25)));

/*
top circle: for 0 < t < 1
    make_point(
                math_cos(2 * math_PI * 0.75 * t) + x_of(pt),
                math_sin(2 * math_PI * 0.75 * t) + y_of(pt) + 1
                );

bottom circle: for 0 < t < 1
    make_point(
                math_sin(2 * math_PI * 0.75 * t) + x_of(pt),
                math_cos(2 * math_PI * 0.75 * t) + y_of(pt) - 1
                );
*/