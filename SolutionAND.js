/**
 * The following is the function where the solution shall be written
 */

function solution(input) {
    const stringToNumber = input.replace(/[^\d]/g, '');

    if(parseInt(stringToNumber)) {
        let newArray = [];
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                for (var z = 0; z < 3; z++) {
                    if (x != y && y != z && z != x) {
                        newArray.push(stringToNumber[x] + "" + stringToNumber[y] + "" + stringToNumber[z]);
                    }
                }
            }
        }
        newArray.sort(function (a, b) {
            return b - a;
        });
        const output = newArray.toString();
        return "Output = " + output;
    }
    else {
        return "Exception Error: No integers provided"
    }
}

// some example inputs
console.log(solution('AFD, EBA, AND')); //expect exception error
console.log(solution('326,892,9891')); // expected output 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected output 632,623,362,326,263,236





