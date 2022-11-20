/////////////////////////////////////////////////////////////////////
//MISSION 9: MUSICAL DIVERSIONS (XP: 1301 / 1300)

//M9, TASK 1
const drum_envelope = adsr(0.05, 0.95, 0, 0);

function snare_drum(note, duration) {
    return noise_sound(duration);
}

function bass_drum(note, duration) {
    function create_sound(frequency) {
        return sine_sound(frequency, duration);
        }
        
  const prime = list(79, 83, 89, 97, 101, 103, 107, 
                    109, 113, 127, 131, 137, 139, 149);
  const prime_waves = map(create_sound, prime);
  return simultaneously(prime_waves);
}

function mute(note, duration) {
    return silence_sound(duration);
}

// Test
play(snare_drum(50, 2));
play(bass_drum(50, 2));

play(consecutively(list(snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2), mute(0, 0.2), snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2))));






//////////////////////////////////////////////////
//M9, TASK 2
function generate_list_of_note(letter_name, list_of_interval) {
    const starting_note = letter_name_to_midi_note(letter_name);
    const remaining_note = accumulate((x, y) => pair(x + starting_note, y), 
                    starting_note, list_of_interval);
                    
    function generate_list_helper(intervals, total){
        return is_null(intervals)
                        ? null 
                        : pair(head(intervals) + total,
                                generate_list_helper(tail(intervals),
                                    head(intervals) + total));
    }
    return pair(starting_note, 
                generate_list_helper(list_of_interval, starting_note));
}

const major_scale_interval = list(2, 2, 1, 2, 2, 2, 1, -1, -2, -2, -2, -1, -2, -2);
const c_major_scale = generate_list_of_note("C4", major_scale_interval);

//display(c_major_scale);


function list_to_sound(list_of_midi_note, duration, instrument) {
    function sounds(midi_note){
        return instrument(midi_note, duration);
    }
    return consecutively(map(sounds,list_of_midi_note));
}

const c_major_scale_sound = list_to_sound(c_major_scale, 0.4, cello);
play(c_major_scale_sound);

const harmonic_minor_scale_interval = list(2, 1, 2, 2, 1, 3, 1, -1, -3, -1, -2, -2, -1, -2);

const melodic_minor_scale_interval = list(2, 1, 2, 2, 2, 2, 1, -2, -2, -1, -2, -2, -1, -2);


const c_harmonic_minor_scale = generate_list_of_note("C4", harmonic_minor_scale_interval);
// const c_harmonic_minor_scale_sound = list_to_sound(c_harmonic_minor_scale, 0.4, cello);
// play(c_harmonic_minor_scale_sound);

const c_melodic_minor_scale = generate_list_of_note("C4", melodic_minor_scale_interval);
// const c_melodic_minor_scale_sound = list_to_sound(c_melodic_minor_scale, 0.4, cello);
// play(c_melodic_minor_scale_sound);






//////////////////////////////////////////////////
//M9, TASK 2
// copy your functions generate_list_of_note and list_to_sound
// from the previous Question here
function generate_list_of_note(letter_name, list_of_interval) {
    const starting_note = letter_name_to_midi_note(letter_name);
    const remaining_note = accumulate((x, y) => pair(x + starting_note, y), 
                    starting_note, list_of_interval);
                    
    function generate_list_helper(intervals, total){
        return is_null(intervals)
                        ? null 
                        : pair(head(intervals) + total,
                                generate_list_helper(tail(intervals),
                                    head(intervals) + total));
    }
    return pair(starting_note, 
                generate_list_helper(list_of_interval, starting_note));
}


function list_to_sound(list_of_midi_note, duration, instrument) {
    function sounds(midi_note){
        return instrument(midi_note, duration);
    }
    return consecutively(map(sounds,list_of_midi_note));
}


const major_arpeggio_interval = list(4, 3, 5, 4, 3, 5);
const minor_arpeggio_interval = list(3, 4, 5, 3, 4, 5);

function generate_arpeggio(letter_name, list_of_interval) {
    return generate_list_of_note(letter_name, list_of_interval);
}

function arpeggiator_up(arpeggio, duration_each, instrument) {
    function one(count, a){
        return count === 0
                ? null 
                : pair(head(a), one(count - 1, tail(a)));
    }
    
    function iter_head(n, arp){
        return n === 0
                ? null 
                : append(one(4, arp), iter_head(n - 1, tail(arp)));
    }
    
    function ins(note){
        return instrument(note, duration_each);
    }
    
    const arpeggio_up = iter_head(4, arpeggio);
    
    return length(arpeggio) < 4 
            ? silence_sound(0)
            : consecutively(map(ins, arpeggio_up));
}

// Test
play(arpeggiator_up(generate_arpeggio("C4", major_arpeggio_interval), 0.1, cello));






//////////////////////////////////////////////////
//M9, TASK 3
// copy your functions generate_list_of_note and list_to_sound
// from the previous Question here
function generate_list_of_note(letter_name, list_of_interval) {
    const starting_note = letter_name_to_midi_note(letter_name);
    const remaining_note = accumulate((x, y) => pair(x + starting_note, y), 
                    starting_note, list_of_interval);
                    
    function generate_list_helper(intervals, total){
        return is_null(intervals)
                        ? null 
                        : pair(head(intervals) + total,
                                generate_list_helper(tail(intervals),
                                    head(intervals) + total));
    }
    return pair(starting_note, 
                generate_list_helper(list_of_interval, starting_note));
}


function list_to_sound(list_of_midi_note, duration, instrument) {
    function sounds(midi_note){
        return instrument(midi_note, duration);
    }
    return consecutively(map(sounds,list_of_midi_note));
}


const major_arpeggio_interval = list(4, 3, 5, 4, 3, 5);
const minor_arpeggio_interval = list(3, 4, 5, 3, 4, 5);

function generate_arpeggio(letter_name, list_of_interval) {
    return generate_list_of_note(letter_name, list_of_interval);
}

function arpeggiator_up(arpeggio, duration_each, instrument) {
    function one(count, a){
        return count === 0
                ? null 
                : pair(head(a), one(count - 1, tail(a)));
    }
    
    function iter_head(n, arp){
        return n === 0
                ? null 
                : append(one(4, arp), iter_head(n - 1, tail(arp)));
    }
    
    function ins(note){
        return instrument(note, duration_each);
    }
    
    const arpeggio_up = iter_head(4, arpeggio);
    
    return length(arpeggio) < 4 
            ? silence_sound(0)
            : consecutively(map(ins, arpeggio_up));
}

// Test
play(arpeggiator_up(generate_arpeggio("C4", major_arpeggio_interval), 0.1, cello));






//////////////////////////////////////////////////
//M9, TASK 4
const drum_envelope = adsr(0.05, 0.95, 0, 0);

// paste your snare_drum, mute and simplify_rhythm
// from Questions 1 and 4 here
function snare_drum(note, duration) {
    return noise_sound(duration);
}

function mute(note, duration) {
    return silence_sound(duration);
}

function simplify_rhythm(rhythm) {
    function simplify_pair_rhythm(rhythm, n) {
        return n === 0
                ? null
                : append(simplify_rhythm(rhythm), 
                            simplify_pair_rhythm(rhythm, n - 1));
  }
  
    return is_list(rhythm)
            ? is_number(head(rhythm))
            ? rhythm
            : accumulate((x, y) => append(simplify_rhythm(x), y), null, rhythm)
            : simplify_pair_rhythm(head(rhythm), tail(rhythm));
}


function percussions(distance, list_of_sounds, rhythm) {
    function percussions_helper(distance, list_of_sounds, start, stop) {
        return start === stop
                    ? silence_sound(0)
                    : simultaneously(list(consecutively(
                        list(silence_sound(distance * start), 
                            head(list_of_sounds))),
                        percussions_helper(distance, tail(list_of_sounds), 
                            start + 1, stop)));
    }
    
    const new_list_of_sounds = map(n => list_ref(list_of_sounds, n),
                                    simplify_rhythm(rhythm));
    return percussions_helper(distance, new_list_of_sounds, 0,
                                length(new_list_of_sounds));
}

// Test
const my_mute_sound = mute(50, 0.7);
const my_snare_drum = snare_drum(50, 0.7);
const my_cello = cello(50, 0.7);
const my_bell = bell(72, 1);
play(percussions(0.5,
         list(my_mute_sound,
              my_snare_drum,
              my_cello,
              my_bell),
         list(1,2,1,0,3,1,0)));






//////////////////////////////////////////////////
//M9, TASK 5
const drum_envelope = adsr(0.05, 0.95, 0, 0);

// paste your snare_drum, mute and simplify_rhythm
// from Questions 1 and 4 here
function snare_drum(note, duration) {
    return noise_sound(duration);
}

function mute(note, duration) {
    return silence_sound(duration);
}

function simplify_rhythm(rhythm) {
    function simplify_pair_rhythm(rhythm, n) {
        return n === 0
                ? null
                : append(simplify_rhythm(rhythm), 
                            simplify_pair_rhythm(rhythm, n - 1));
  }
  
    return is_list(rhythm)
            ? is_number(head(rhythm))
            ? rhythm
            : accumulate((x, y) => append(simplify_rhythm(x), y), null, rhythm)
            : simplify_pair_rhythm(head(rhythm), tail(rhythm));
}


function percussions(distance, list_of_sounds, rhythm) {
    function percussions_helper(distance, list_of_sounds, start, stop) {
        return start === stop
                    ? silence_sound(0)
                    : simultaneously(list(consecutively(
                        list(silence_sound(distance * start), 
                            head(list_of_sounds))),
                        percussions_helper(distance, tail(list_of_sounds), 
                            start + 1, stop)));
    }
    
    const new_list_of_sounds = map(n => list_ref(list_of_sounds, n),
                                    simplify_rhythm(rhythm));
    return percussions_helper(distance, new_list_of_sounds, 0,
                                length(new_list_of_sounds));
}

// Test
const my_mute_sound = mute(50, 0.7);
const my_snare_drum = snare_drum(50, 0.7);
const my_cello = cello(50, 0.7);
const my_bell = bell(72, 1);
play(percussions(0.5,
         list(my_mute_sound,
              my_snare_drum,
              my_cello,
              my_bell),
         list(1,2,1,0,3,1,0)));