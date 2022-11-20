/////////////////////////////////////////////////////////////////////
//MISSION 5: CURVE MANIPULATION (XP: 675 / 600)

//M5, TASK 1
function reflect_through_y_axis(curve) {
    return t => make_point(-x_of(curve(t)),y_of(curve(t)));
}

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

const my_s = s_generator(make_point(0,0));
(draw_connected_full_view_proportional(200))(reflect_through_y_axis(my_s));



//////////////////////////////////////////////////
//M5, TASK 2
// you can define your own helper functions here
function reflect_through_y_axis(curve) {
    return t => make_point(-x_of(curve(t)),y_of(curve(t)));
}

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


function close(curve) {
    return t => {
        return t <= 0.5
                ? curve(2 * t)
                : curve(1 - 2 * (t - 0.5));
    };
}

const my_s_curve = s_generator(make_point(0,0));

// reflecting the s-curve
draw_connected_full_view_proportional(200)
(connect_ends(close(my_s_curve), reflect_through_y_axis(my_s_curve)));