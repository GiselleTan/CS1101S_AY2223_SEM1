/////////////////////////////////////////////////////////////////////
//MISSION 7: PREMORSEAL COMMUNICATIONS (XP: 1012 / 950)

//M7, TASK 1
function noise_sound(duration) {
    const wave = t => math_random() * 2 - 1;
    return make_sound(wave, duration);
}

function cut_sound(sound, duration) {
    const wave = get_wave(sound);
    return make_sound(wave,duration);
}

// Play test sound.
play(cut_sound(noise_sound(2), 1));



//////////////////////////////////////////////////
//M7, TASK 2
function sine_sound(freq, duration) {
    return make_sound(t => math_sin(2 * math_PI * freq * t), duration);
}

// Play test sound.
play(sine_sound(500, 1));



//////////////////////////////////////////////////
//M7, TASK 3
// Copy your own sine_sound function from the previous question here.
function sine_sound(freq, duration) {
    return make_sound(t => math_sin(2 * math_PI * freq * t), duration);
}


function two_consecutively(s1, s2) {
    const duration_s1 = get_duration(s1);
    const duration_s2 = get_duration(s2);
    const total_duration = duration_s1 + duration_s2;
    const two_sound = t => t < duration_s1 
                            ? get_wave(s1)(t)
                            : get_wave(s2)(t - duration_s1);
    return make_sound(two_sound,total_duration);
}

const my_sine_1 = sine_sound(500, 1);
const my_sine_2 = sine_sound(750, 2);

// Play test sound.
play(two_consecutively(my_sine_1, my_sine_2));



//////////////////////////////////////////////////
//M7, TASK 4
// Copy your own sine_sound function from the previous question here.
function sine_sound(freq, duration) {
    return make_sound(t => math_sin(2 * math_PI * freq * t), duration);
}

// Copy your own two_consecutively function from the previous question here.
function two_consecutively(s1, s2) {
    const duration_s1 = get_duration(s1);
    const duration_s2 = get_duration(s2);
    const total_duration = duration_s1 + duration_s2;
    const two_sound = t => t < duration_s1 
                            ? get_wave(s1)(t)
                            : get_wave(s2)(t - duration_s1);
    return make_sound(two_sound,total_duration);
}

function consecutively(list_of_sounds) {
    return accumulate(two_consecutively, silence_sound(0), list_of_sounds);
}

const my_sine_1 = sine_sound(500, 0.5);
const my_sine_2 = sine_sound(750, 1);
const my_sine_3 = sine_sound(625, 0.5);

// Play test sound.
play(consecutively(list(my_sine_1, my_sine_2, my_sine_3)));

/*
    return length(list_of_sounds) === 1
                ? head(list_of_sounds)
                : two_consecutively(head(list_of_sounds),
                    consecutively(tail(list_of_sounds)));
*/



//////////////////////////////////////////////////
//M7, TASK 5
// Copy your own sine_sound function from the previous question here.
function sine_sound(freq, duration) {
    return make_sound(t => math_sin(2 * math_PI * freq * t), duration);
}

// Copy your own two_consecutively function from the previous question here.
function two_consecutively(s1, s2) {
    const duration_s1 = get_duration(s1);
    const duration_s2 = get_duration(s2);
    const total_duration = duration_s1 + duration_s2;
    const two_sound = t => t < duration_s1 
                            ? get_wave(s1)(t)
                            : get_wave(s2)(t - duration_s1);
    return make_sound(two_sound,total_duration);
}

// Copy your own consecutively function from the previous question here.
function consecutively(list_of_sounds) {
    return accumulate(two_consecutively, silence_sound(0), list_of_sounds);
}

const dot_duration = 0.125;
const dash_duration = 3 * dot_duration;

// Create dot, dash and pause sounds first.
const dot_sound = sine_sound(800, dot_duration);
const dash_sound = sine_sound(800, dash_duration);
const dot_pause = silence_sound(dot_duration);
const dash_pause = silence_sound(dash_duration);

// Create sounds for each letter.
const S_sound = consecutively(list(dot_sound, dot_pause, dot_sound,
                                    dot_pause, dot_sound));
const O_sound = consecutively(list(dash_sound, dot_pause, dash_sound,
                                    dot_pause, dash_sound));

// Build the signal out of letter sounds and pauses.
const distress_signal = consecutively(list(S_sound, dash_pause, O_sound, 
                                            dash_pause, S_sound));

// Play distress signal.
play(distress_signal);