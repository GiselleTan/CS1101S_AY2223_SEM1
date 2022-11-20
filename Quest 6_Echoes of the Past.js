////////////////////////////////////////////////////////////////////
//QUEST 6: ECHOES OF THE PAST (XP: 743 / 670)

//Q6, TASK 1
function backward(sound) {
    const duration = get_duration(sound);
    return make_sound(t => get_wave(sound)(duration - t), duration);
}

//                                      // step 0: press "Run"
// init_record();                       // step 1 in REPL
// const my_voice = record_for(2, 0.2); // step 2 in REPL
// play(backward(my_voice()));          // step 3 in REPL




////////////////////////////////////////////////////
//Q6, TASK 2
function repeat(n, sound) {
    const repeated_sound = make_sound(get_wave(sound), get_duration(sound));
    return n === 0
            ? silence_sound(0)
            : consecutively(list(repeated_sound,repeat(n-1,sound)));
}

// Test
const my_sound = consecutively(
    list(sine_sound(400, 1), sine_sound(800, 1)));
const my_repeated = repeat(3, my_sound);
play(my_repeated);




////////////////////////////////////////////////////
//Q6, TASK 3
function fast_forward(n, sound) {
    const wave = get_wave(sound);
    const duration = get_duration(sound);
    return make_sound(t => wave(n * t), duration / n);
}

//                                      // step 0: press "Run"
// init_record();                       // step 1 in REPL
// const my_voice = record_for(2, 0.2); // step 2 in REPL
// play(fast_forward(2, my_voice()));   // step 3 in REPL

/*
My Test
const my_sound = consecutively(
    list(sine_sound(400, 3), sine_sound(800, 3)));
play(fast_forward(2, my_sound));
*/




////////////////////////////////////////////////////
//Q6, TASK 4
function repeat(n, sound) {
    const repeated_sound = make_sound(get_wave(sound), get_duration(sound));
    return n === 0
            ? silence_sound(0)
            : consecutively(list(repeated_sound,repeat(n-1,sound)));
}

function echo(n, d, sound) {
    const original_sound = get_wave(sound);
    const total_duration = n * d + get_duration(sound);
    
    function echo_wave_helper(t, n, wave, count) {
        return count > n
                    ? 0
                    : (t > d * count 
                    ? (1 / math_pow(2, count)) * wave(t - d * count)
                    : 0) + echo_wave_helper(t, n, wave, count + 1);
                }

    return make_sound(
        t => original_sound(t) + echo_wave_helper(t, n, original_sound, 1),
        total_duration);
    }

// Test
const test_sound = sine_sound(800, 0.2);
play(echo(2, 0.4, test_sound));
 
 //TO MAKE ECHO BUT WITHOUT HALF OF AMPLITUDE:
 //return repeat(n + 1, consecutively(list(sound, silence_sound(d))));





////////////////////////////////////////////////////
//Q6, TASK 5
// Copy your functions backward, repeat,
// fast_forward and echo here.
function backward(sound) {
    const duration = get_duration(sound);
    return make_sound(t => get_wave(sound)(duration - t), duration);
}

function repeat(n, sound) {
    const repeated_sound = make_sound(get_wave(sound), get_duration(sound));
    return n === 0
            ? silence_sound(0)
            : consecutively(list(repeated_sound,repeat(n-1,sound)));
}

function fast_forward(n, sound) {
    const wave = get_wave(sound);
    const duration = get_duration(sound);
    return make_sound(t => wave(n * t), duration / n);
}

function echo(n, d, sound) {
    const original_sound = get_wave(sound);
    const total_duration = n * d + get_duration(sound);
    
    function echo_wave_helper(t, n, wave, count) {
    return count > n
                ? 0
                : (t > d * count 
                ? (1 / math_pow(2, count)) * wave(t - d * count)
                : 0) + echo_wave_helper(t, n, wave, count + 1);
                }
    return make_sound(
    t => original_sound(t) + echo_wave_helper(t, n, original_sound, 1),
    total_duration);
}

function make_alien_jukebox(sound) {
    const original = sound;
    const backward = backward(sound);
    const half_speed = fast_forward(1 / 2, sound);
    const double_speed_thrice = repeat(3, fast_forward(2, sound));
    const backward_echo_delay = echo(4, 0.3, backward(sound));
    
    const sound_list = list(original, backward, half_speed, 
                            double_speed_thrice, backward_echo_delay);
                            
    return n => play(list_ref(sound_list, n));
}

// Press "Run"
// Then test in REPL:
// init_record();
// const erksh_voice = record_for(1, 0.2);
// const j = make_alien_jukebox(erksh_voice());
// j(0);  // plays original recording
// j(1);  // plays it backward
// j(2);  // plays it at half speed
// j(3);  // plays it at double speed, three times in a row
// j(4);  // plays it backward with 4-times echo,
//        //     with 0.3 seconds echo delay