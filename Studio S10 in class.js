//STUDIO S10 IN CLASS: SEARCHING AND SORTING II; MEMOIZATION

//PROBLEM 1
function rotate_matrix(M){
    const n = array_length(M);
    
    function swap(r1, c1, r2, c2){
        const temp = M[r1][c1];
        M[r1][c1] = M[r2][c2];
        M[r2][c2] = temp;
    }

    //Do a matrix transpose first
    for (let r = 0; r < n; r = r + 1){
        for(let c = r + 1; c < n; c = c + 1){
            swap(r, c, c, r);
        }
    }

    //Then reverse each row
    const half_n = math_floor(n / 2);
    for (let r = 0; r < n; r = r + 1){
        for (let c = 0; c < half_n; c = c + 1){
            swap(r, c, r, n - c - 1);
        }
    }
}