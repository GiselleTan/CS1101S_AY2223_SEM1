/////////////////////////////////////////////////////////////////////
//MISSION 18: STREAMING THE ANOMALY (XP: 773 / 1000)

//M18, TASK 1
function array_to_stream(a) {
    function helper(len){
        return len < array_length(a)
                ? pair(a[len], () => helper(len + 1))
                : null;
        }
    return helper(0);
}


display(array_length(anomaly_data) ===
        stream_length(array_to_stream(anomaly_data)));
display(anomaly_data[7] ===
        stream_ref(array_to_stream(anomaly_data), 7));





//////////////////////////////////////////////////
//M18, TASK 2
const FPS = 10;

// Your array_to_stream function from TASK 1 goes here.
function array_to_stream(a) {
    function helper(len){
        return len < array_length(a)
                ? pair(a[len], () => helper(len + 1))
                : null;
        }
    return helper(0);
}

function stream_to_filter(s) {
    let stream = s;
    return (src, dest) => { 
        if (!is_null(stream)) {
            copy_image(head(stream), dest);
            stream = stream_tail(stream);
        }
    };
}

install_filter(stream_to_filter(array_to_stream(anomaly_data)));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();





//////////////////////////////////////////////////
//M18, TASK 3
const FPS = 10;

// Your array_to_stream function from TASK 1 goes here.
function array_to_stream(a) {
    function helper(len){
        return len < array_length(a)
                ? pair(a[len], () => helper(len + 1))
                : null;
        }
    return helper(0);
}

// Your stream_to_filter function from TASK 2 goes here.
function stream_to_filter(s) {
    let stream = s;
    return (src, dest) => { 
        if (!is_null(stream)) {
            copy_image(head(stream), dest);
            stream = stream_tail(stream);
        }
    };
}

function loop(s) {
    function helper(stream){
        return is_null(stream)
                ? helper(s)
                : pair(head(stream), () => helper(stream_tail(stream)));
    }
    return helper(s);
}


install_filter(
    stream_to_filter(
        loop(array_to_stream(anomaly_data))));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();





//////////////////////////////////////////////////
//M18, TASK 4 (0 / 300XP)
//THIS SOLUTION IS WRONG
const FPS = 10;

// Your array_to_stream function from TASK 1 goes here.
function array_to_stream(a) {
    function helper(len){
        return len < array_length(a)
                ? pair(a[len], () => helper(len + 1))
                : null;
        }
    return helper(0);
}

// Your stream_to_filter function from TASK 2 goes here.
function stream_to_filter(s) {
    let stream = s;
    return (src, dest) => { 
        if (!is_null(stream)) {
            copy_image(head(stream), dest);
            stream = stream_tail(stream);
        }
    };
}

// Your loop function from TASK 3 goes here.
function loop(s) {
    function helper(stream){
        return is_null(stream)
                ? helper(s)
                : pair(head(stream), () => helper(stream_tail(stream)));
    }
    return helper(s);
}


function time_lapse(s, n) {
    let count = n;
    if (count === 0){
        pair(head(s), () => time_lapse(stream_tail(s), n));
    } else {
        time_lapse(stream_tail(s), count - 1);
    }
    return s;
}


install_filter(
    stream_to_filter(
        time_lapse(loop(array_to_stream(anomaly_data)),
                   3)));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();

//FEEDBACK:
//Time Lapse not working as intended! 
//Instead of steaming your video, time lapse is supposed to speed up your video, 
//so the goal is to skip certain streams based on the time_lapse factor.
//You can think of it like speeding the video up by skipping frames.

