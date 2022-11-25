////////////////////////////////////////////////////////////
//PATH 16: STREAMS II (XP: 175 / 150)

//P16, TASK 1
const alternating_ones = pair(1, 
    () => pair(-1,
                () => alternating_ones));




//P16, TASK 2
function make_alternating_stream(s) {
    return pair(head(s), 
                () => stream_map(x => - x, 
                        make_alternating_stream(stream_tail(s))));

}




//P16, TASK 3
function zip_streams(s1, s2) {

    return pair(head(s1),() => pair(head(s2), 
            () => zip_streams(stream_tail(s1), stream_tail(s2))));
}




//P16, TASK 4
function every_other(s) {
    return pair(head(s), () => every_other(stream_tail(stream_tail(s))));
}




//P16, TASK 5
function partial_sums(s) {
    function helper(stream, sum){
        sum = sum + head(stream);
        return pair(sum,
                    () => helper(stream_tail(stream), sum));
    }
    return helper(s, 0);
}