
function factorialBottomUp(n) {
    let table = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) {
            table[i] = 1;
        } else {
            table[i] = i * table[i - 1];
        }
    }
    return table[n];
}

console.log(factorialBottomUp(5));

function factorialMemoization(n, arr) {
    //console.log(n, arr);
    if (arr[n]) {

        return arr[n];
    }
    let result;
    if (n == 0 || n == 1) {


        result = 1;
    } else {
        result = n * factorialMemoization(n - 1, arr);
    }
    arr[n] = result;
    return result;
}

console.log(factorialMemoization(5, []));