/////////////////////////////////////////////////////////////////////
//MISSION 8: POTS AND PANS (XP: 1265 / 1200)

//M8, TASK 1
// Function type: Number -> pair_of_numbers
// where input is between 0 - 15 inclusive.
// where 0 - 9 represent the digits
// 10 represents *, 11 represents #,
// and 12 - 15 represent the letters A-D.

function get_dtmf_frequencies(number) {
    const rows = list(697, 770, 852, 941);
    const columns = list(1209, 1336, 1477, 1633);
    const dtmf_pairs = list(
                        pair(3, 1), //0
                        pair(0, 0), //1
                        pair(0, 1), //2
                        pair(0, 2), //3
                        pair(1, 0), //4
                        pair(1, 1), //5
                        pair(1, 2), //6
                        pair(2, 0), //7
                        pair(2, 1), //8
                        pair(2, 2), //9
                        pair(3, 0), //*, 10
                        pair(3, 2), //#, 11
                        pair(0, 3), //A, 12
                        pair(1, 3), //B, 13
                        pair(2, 3), //C, 14
                        pair(3, 3) //D, 15
                        );
    const dtmf_coordinates = list_ref(dtmf_pairs,number);
    return pair(list_ref(rows, head(dtmf_coordinates)),
                list_ref(columns, tail(dtmf_coordinates)));
}



//////////////////////////////////////////////////
//M8, TASK 2
// Copy your function get_dtmf_frequencies here.
function get_dtmf_frequencies(number) {
    const rows = list(697, 770, 852, 941);
    const columns = list(1209, 1336, 1477, 1633);
    const dtmf_pairs = list(
                        pair(3, 1), //0
                        pair(0, 0), //1
                        pair(0, 1), //2
                        pair(0, 2), //3
                        pair(1, 0), //4
                        pair(1, 1), //5
                        pair(1, 2), //6
                        pair(2, 0), //7
                        pair(2, 1), //8
                        pair(2, 2), //9
                        pair(3, 0), //*, 10
                        pair(3, 2), //#, 11
                        pair(0, 3), //A, 12
                        pair(1, 3), //B, 13
                        pair(2, 3), //C, 14
                        pair(3, 3) //D, 15
                        );
    const dtmf_coordinates = list_ref(dtmf_pairs,number);
    return pair(list_ref(rows, head(dtmf_coordinates)),
                list_ref(columns, tail(dtmf_coordinates)));
}

function make_dtmf_tone(frequency_pair) {
    const sound_1 = sine_sound(head(frequency_pair), 0.5);
    const sound_2 = sine_sound(tail(frequency_pair), 0.5);
    return simultaneously(list(sound_1, sound_2));
}



//////////////////////////////////////////////////
//M8, TASK 3
// Copy your functions get_dtmf_frequencies and make_dtmf_tone here.
function get_dtmf_frequencies(number) {
    const rows = list(697, 770, 852, 941);
    const columns = list(1209, 1336, 1477, 1633);
    const dtmf_pairs = list(
                        pair(3, 1), //0
                        pair(0, 0), //1
                        pair(0, 1), //2
                        pair(0, 2), //3
                        pair(1, 0), //4
                        pair(1, 1), //5
                        pair(1, 2), //6
                        pair(2, 0), //7
                        pair(2, 1), //8
                        pair(2, 2), //9
                        pair(3, 0), //*, 10
                        pair(3, 2), //#, 11
                        pair(0, 3), //A, 12
                        pair(1, 3), //B, 13
                        pair(2, 3), //C, 14
                        pair(3, 3) //D, 15
                        );
    const dtmf_coordinates = list_ref(dtmf_pairs,number);
    return pair(list_ref(rows, head(dtmf_coordinates)),
                list_ref(columns, tail(dtmf_coordinates)));
}

function make_dtmf_tone(frequency_pair) {
    const sound_1 = sine_sound(head(frequency_pair), 0.5);
    const sound_2 = sine_sound(tail(frequency_pair), 0.5);
    return simultaneously(list(sound_1, sound_2));
}

function dial(list_of_digits) {
    function dial_tone(number){
        return consecutively(list(
                            make_dtmf_tone(get_dtmf_frequencies(number)), 
                            silence_sound(0.1)));
    }
    return consecutively(map(dial_tone, list_of_digits));
}

// Test
//play(dial(list(6,2,3,5,8,5,7,7)));

//FEEDBACK:
//Extremely minor error of having that last silence sound, thereby,
//not exactly correct, didnt minus any xp. But good use of map!



//////////////////////////////////////////////////
//M8, TASK 4
// Copy your functions get_dtmf_frequencies,
// make_dtmf_tone and dial here.
function get_dtmf_frequencies(number) {
    const rows = list(697, 770, 852, 941);
    const columns = list(1209, 1336, 1477, 1633);
    const dtmf_pairs = list(
                        pair(3, 1), //0
                        pair(0, 0), //1
                        pair(0, 1), //2
                        pair(0, 2), //3
                        pair(1, 0), //4
                        pair(1, 1), //5
                        pair(1, 2), //6
                        pair(2, 0), //7
                        pair(2, 1), //8
                        pair(2, 2), //9
                        pair(3, 0), //*, 10
                        pair(3, 2), //#, 11
                        pair(0, 3), //A, 12
                        pair(1, 3), //B, 13
                        pair(2, 3), //C, 14
                        pair(3, 3) //D, 15
                        );
    const dtmf_coordinates = list_ref(dtmf_pairs,number);
    return pair(list_ref(rows, head(dtmf_coordinates)),
                list_ref(columns, tail(dtmf_coordinates)));
}

function make_dtmf_tone(frequency_pair) {
    const sound_1 = sine_sound(head(frequency_pair), 0.5);
    const sound_2 = sine_sound(tail(frequency_pair), 0.5);
    return simultaneously(list(sound_1, sound_2));
}

function dial(list_of_digits) {
    function dial_tone(number){
        return consecutively(list(
                            make_dtmf_tone(get_dtmf_frequencies(number)), 
                            silence_sound(0.1)));
    }
    return consecutively(map(dial_tone, list_of_digits));
}


function dial_all(list_of_numbers) {
    const evil_number = list(1, 8, 0, 0, 5, 2, 1, 1, 9, 8, 0);
    function not_evil(numbers){
        return !equal(evil_number,numbers);
    }
    
    function accumulate_sounds(current, accumulated) {
        return consecutively(list(current, accumulated));
    }

    return accumulate(accumulate_sounds, silence_sound(0),
                        map(dial, filter(not_evil, list_of_numbers)));
}

// Test
//play( )
play(dial_all(
  list(
      list(1,8,0,0,5,2,1,1,9,8,0),  // not played!!!
      list(6,2,3,5,8,5,7,7),
      list(0,0,8,6,1,3,7,7,0,9,5,0,0,6,1))
  ));
