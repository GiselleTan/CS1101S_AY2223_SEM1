////////////////////////////////////////////////////////////////////
//QUEST 11: RESCUE THE SPACE LIZARD (XP: 800 / 800)

//Q11, TASK 1
function max_flies_to_eat(tile_flies) {
    //2 different positions to start in next row
    function find_max_position_2(a, b){
        return a > b ? a : b;
    }
    
    //3 different positions to start in next row
    function find_max_position_3(a, b, c){
        return a > b
                ? (a > c ? a : c)
                : (b > c ? b : c);
    }
    
    const len_rows = array_length(tile_flies);
    const len_columns = array_length(tile_flies[0]);
    
    function helper(row, column){
        const pos1 = column - 1;
        const pos2 = column;
        const pos3 = column + 1;
        
        if (row === len_rows - 1){
            return tile_flies[row][column];
        } else {
            const current_flies = tile_flies[row][column];
            
            if (pos1 === -1){
                return current_flies + find_max_position_2(
                                        helper(row + 1, pos2), 
                                        helper(row + 1, pos3));
            } else if (pos3 === len_columns){
                return current_flies + find_max_position_2(
                                        helper(row + 1, pos1),
                                        helper(row + 1, pos2));
            } else {
                return current_flies + find_max_position_3(
                                        helper(row + 1, pos1),
                                        helper(row + 1, pos2),
                                        helper(row + 1, pos3));
            }
        }
    }
    
    let total_flies = 0;
    for (let i = 0; i < len_columns; i = i + 1){
        if (helper(0, i) > total_flies) {
            total_flies = helper(0, i);
        }
    }
    
    return total_flies;
}

// TEST:
const tile_flies = [[3, 1, 7, 4, 2],
                     [2, 1, 3, 1, 1],
                     [1, 2, 2, 1, 8],
                     [2, 2, 1, 5, 3],
                     [2, 1, 4, 4, 4],
                     [5, 7, 2, 5, 1]];

max_flies_to_eat(tile_flies); // Expected result: 32

/*
    //adding in a straight line down a column
    for (let col = 0; col < columns; col = col + 1){
        let sum = 0;
        for (let row = 0; row < rows; row = row + 1){
            sum = sum + tile_flies[row][col];
        }
        final_sum[array_length(final_sum)] = sum;
    }
*/





////////////////////////////////////////////////////
//Q11, TASK 2
let mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function memo_max_flies_to_eat(tile_flies) {
    mem = [];
    //2 different positions to start in next row
    function find_max_position_2(a, b){
        return a > b ? a : b;
    }
    
    //3 different positions to start in next row
    function find_max_position_3(a, b, c){
        return a > b
                ? (a > c ? a : c)
                : (b > c ? b : c);
    }
    
    const len_rows = array_length(tile_flies);
    const len_columns = array_length(tile_flies[0]);
    
    function helper(row, column){
        if (read(row, column) !== undefined){
            return read(row, column);
        } else {
            const pos1 = column - 1;
            const pos2 = column;
            const pos3 = column + 1;
            let result = 0;
            
            if (row === len_rows - 1){
                return tile_flies[row][column];
            } else {
                const current_flies = tile_flies[row][column];
                
                if (pos1 === -1){
                    result = current_flies + find_max_position_2(
                                            helper(row + 1, pos2), 
                                            helper(row + 1, pos3));
                    write(row, column, result);
                    return result;
                } else if (pos3 === len_columns){
                    result = current_flies + find_max_position_2(
                                            helper(row + 1, pos1),
                                            helper(row + 1, pos2));
                
                    write(row, column, result);
                    return result;
                } else {
                    result = current_flies + find_max_position_3(
                                            helper(row + 1, pos1),
                                            helper(row + 1, pos2),
                                            helper(row + 1, pos3));
                
                    write(row, column, result);
                    return result;
                }
            }
        }
    }
    
    let total_flies = 0;
    for (let i = 0; i < len_columns; i = i + 1){
        if (helper(0, i) > total_flies) {
            total_flies = helper(0, i);
        }
    }
    
    return total_flies;

}

// TEST:
// const tile_flies = [[3, 1, 7, 4, 2],
//                     [2, 1, 3, 1, 1],
//                     [1, 2, 2, 1, 8],
//                     [2, 2, 1, 5, 3],
//                     [2, 1, 4, 4, 4],
//                     [5, 7, 2, 5, 1]];
//
// memo_max_flies_to_eat(tile_flies); // Expected result: 32