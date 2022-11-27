//STUDIO S10 : SEARCHING AND SORTING II; MEMOIZATION

//PROBLEM 2B
function bubblesort_list(L){
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i + 1){
        let L1 = L;
        for (let j = 0; j < i; j = j + 1){
            if(head(L1) > head(tail(L1))){
                const temp = head(L1);
                set_head(L1, head(tail(L1)));
                set_head(tail(L1), temp);
            }
        }
        L1 = tail(L1);
    }
}




//PROBLEM 3
const mem = [];

function read(n, k){
    return mem[n] === undefined 
            ? undefined
            : mem[n][k];
}

function write(n, k, value){
    if (mem[n] === undefined){
        mem[n] = [];
    }
    mem[n][k] = value;
}

function first_denomination(kinds_of_coins){
    return kinds_of_coins === 1 ? 5 :
            kinds_of_coins === 2 ? 10 :
            kinds_of_coins === 3 ? 20 :
            kinds_of_coins === 4 ? 50 :
            kinds_of_coins === 5 ? 100 : 0;
}

//The non-memoized version
function cc(amount, kinds_of_coins){
    return amount === 0
            ? 1
            : amount < 0 || kinds_of_coins === 0
            ? 0
            : cc(amount, kinds_of_coins - 1) 
                + 
                cc(amount - first_denomination(kinds_of_coins), kinds_of_coins);
}

//The memoized version
//n is the amount in cents, and k is the number of denominations.
function mcc(n, k){
    if (read(n, k) !== undefined){
        return read(n, k);
    } else {
        const result = cc(n, k);
        write(n, k, result);
        return result;
    }
}