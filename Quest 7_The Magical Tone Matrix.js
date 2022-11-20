////////////////////////////////////////////////////////////////////
//QUEST 7: THE MAGICAL TONE MATRIX (XP: 301 / 800)

//Q7, TASK 1
// copy generate_list_of_note from Mission "Musical Diversions"
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


const pentatonic_list_of_interval = list(2, 2, 3, 2, 3);

// repeat_pattern from Lecture L2
function repeat_pattern(n, pattern, rune) {
    return n === 0 ? rune : repeat_pattern(n - 1, pattern, pattern(rune));
}

function repeat_list_of_interval(n, list_of_interval, accum_interval) {
  return n === 0
            ? accum_interval
            : repeat_list_of_interval(n - 1, list_of_interval,
                                append(list_of_interval, accum_interval));
}


function repeated_scale(note, list_of_interval, n, duration, instrument) {
    const repeated_sounds = repeat_list_of_interval(n, list_of_interval, null);
    const list_of_notes = generate_list_of_note(note, repeated_sounds);
    const list_of_sounds = map(note => instrument(note, duration),
                                list_of_notes);
    return list_of_sounds;
}

play(consecutively(repeated_scale("C4", pentatonic_list_of_interval,
                                  2, 1, cello)));

play(consecutively(repeated_scale("C4", list(2,1,1,3), 3, 0.5, cello)));






//LEFT TASK 2 BLANK