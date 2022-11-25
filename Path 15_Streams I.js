////////////////////////////////////////////////////////////
//PATH 15: STREAMS I (XP: 175 / 150)

//P15, TASK 1
function ones_stream() {
    return pair(1, ones_stream);
}
//This function returns a stream when applied to no arguments





//P15, TASK 2
function make_prompt_stream() {
    return pair(prompt("Enter next stream element: "), make_prompt_stream);
}

const prompt_stream = make_prompt_stream();
//One window pops up and after a button is pressed, prompt_stream refers to a stream





//P15, TASK 3
function make_prompt_stream() {
    return pair(prompt("Enter next stream element: "), make_prompt_stream);
}

const prompt_stream = make_prompt_stream();

stream_ref(prompt_stream, 2);
//The program successively pops up three windows and returns the last entered string





//P15, TASK 4
function make_prompt_stream() {
    return pair(prompt("Enter next stream element: "), make_prompt_stream);
}

const prompt_stream = make_prompt_stream();

is_stream(prompt_stream);
//The program keeps popping up new windows and never returns a value





//P15, TASK 5
//Can we write a function is_infinite_stream that returns true if its argument stream is an infinite stream and false if its argument stream is a finite stream?
//No.





//P15, TASK 6
function n_of_n_stream() {
    function helper (a, count){
        return count === 0
                ? helper(a + 1, a + 1)
                : pair(a, () => helper(a, count - 1));
    }
    return helper(1, 1);
}

eval_stream(n_of_n_stream(), 22);





//P15, TASK 7
function shorten_stream(s, k) {
    return k === 0 || is_null(s)
        ? null 
        : pair(head(s), 
                () => shorten_stream(stream_tail(s), k - 1));
    
}