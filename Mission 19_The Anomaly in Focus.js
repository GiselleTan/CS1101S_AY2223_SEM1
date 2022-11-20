/////////////////////////////////////////////////////////////////////
//MISSION 19: THE ANOMALY IN FOCUS (XP: 100 / 1000)

//M19, TASK 1
function red_rectangle_stream(s) {
    //CHECK IF RGB IS (255, 0, 0)
    /*
    return stream_map(, s)
    if (x[0] === 255 && x[1] === 0 && x[2] === 0){
        return pair(head(s), 
                    () => red_rectangle_stream(stream_tail(s)));
    
    }
    */
}

// head(red_rectangle_stream(anomaly_stream));
// should evaluate to: [[141, 191], [159, 209]]





//////////////////////////////////////////////////
//M19, TASK 2
// Copy your function red_rectangle_stream from TASK 1 here.


function stream_combine(f, s1, s2) {
    return pair(f(head(s1), head(s2)),
                () => stream_combine(f, stream_tail(s1), stream_tail(s2)));

}


// Trim the given image using the given rectangle.
// Returns an image that includes all purely red
// pixels of the given image.

function trim(image, rectangle) {
    const trimmed = [];
    const i_min = head(head(rectangle));
    const j_min = tail(head(rectangle));
    const i_max = head(tail(rectangle));
    const j_max = tail(tail(rectangle));

    for (let i = i_min; i <= i_max; i = i + 1) {
        const new_i = i - i_min;
        trimmed[new_i] = [];
        for (let j = j_min; j <= j_max; j = j + 1) {
            const new_j = j - j_min;
            trimmed[new_i][new_j] = image[i][j];
        }
    }
    return trimmed;
}

// Example:

const focused_stream = stream_combine(
                           trim,
                           anomaly_stream,
                           red_rectangle_stream(anomaly_stream));
// head(focused_stream);

// Should return a close-up of the anomaly, a 19x19 image of black,
// red and white pixels.

/*
display(
    "test 1, expected 19, actual: " +
    stringify(array_length(head(focused_stream))) + ' : ' + 
    stringify(array_length(head(focused_stream)) === 19)
    );
// "test 1, expected 19, actual: 19 : true"

display(
    "test 2, expected 19, actual: " +
    array_length(head(focused_stream)[0]) + ' : ' + 
    stringify(array_length(head(focused_stream)[0]) === 19)
    );
// "test 2, expected 19, actual: 19 : true"
head(focused_stream);
*/

//LEFT TASK 3 BLANK