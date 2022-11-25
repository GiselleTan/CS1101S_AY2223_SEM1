////////////////////////////////////////////////////////////
//PATH 13: ARRAYS AND LOOPS (XP: 212 / 200)

//P13, TASK 1
const abc = [1, 2, 3, 4, 5];
abc[1] = 8;
abc;
//[1, 8, 3, 4, 5]




//P13, TASK 2
const abc = [];
abc[10] = "abc";
array_length(abc);
//11




//P13, TASK 3
let AA = [1, 2, 3, 4];
let BB = AA;
let CC = [1, 2, 3, 4];
//What are the values of the expressions AA === BB, BB === CC and AA === CC, respectively?
true, false, false




//P13, TASK 4
function change1(x, val) {
    x = val;
}

function change2(A, i, val) {
    A[i] = val;
}

let C = [1, 2, 3, 4, 5];
let B = C;
change1(C[1], 7);
change2(B, 2, 8);
C;
//[1, 2, 8, 4, 5]




//P13, TASK 5
let A = [1, [2, 3, [4, 5, 6], 7, [8, 9]], 10, [[11, 12, 13], 14, 15]];
//To access 13:
A[3][0][2];




//P13, TASK 6
let x = 1;
for (x = 0; x <= 5; x = x + 2) {
    display(x);
}
display(x);
//0, 2, 4, 6




//P13, TASK 7
for (let x = 1; x <= 4; x = x + 1) {
    // do nothing
}
x;
//Error, because name x is not declared.




//P13, TASK 8
let k = 0;
for (let x = 5; x >= 1; x = x - 1) {
    for (let y = 0; y < x; y = y + 1) {
        k = k + 1;
    }
}
k;
//15




//P13, TASK 9
function dot_product(A, B) {
    let product = 0;
    for (let i = 0; i < array_length(A); i = i + 1) {
        product = product + (A[i] * B[i]);
    }
    return product;
}




//P13, TASK 10
function accumulate_array(op, init, A) {
    let call = op(init, A[0]);
    for (let i = 1; i < array_length(A); i = i + 1) {
        call = op(call, A[i]);
    }
    return call;
}




//P13, TASK 11
function filter_array(pred, A) {
    let satisfy = [];
    for (let i = 0; i < array_length(A); i = i + 1) {
        let position = array_length(satisfy);
        if (pred(A[i])) {
            satisfy[position] = A[i];
        }
    }
    return satisfy;
}




//P13, TASK 12
function transpose(M) {
    let transposed_matrix = [];
    const rows = array_length(M);
    const columns = array_length(M[0]);
    
    for (let i = 0; i < columns; i = i + 1) {
        transposed_matrix[i] = [];
        for (let a = 0; a < rows; a = a + 1){
            transposed_matrix[i][a] = M[a][i];
        }
    }
    return transposed_matrix;
}

