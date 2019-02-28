// fibonacci(0) = 0, fibonacci(1) = 1, fibonacci(2) = 0,1,1, fibonacci(6) = 0,1,1,2,3, 5, 8

//fibonacci with memoization .

//Dynamic Programming - recursion, memoization
function fibonacci(num, memo) {
    let result;
    console.log('outside', memo, num);

    if (memo[num]) {
        console.log('inside', memo, num);
        return memo[num];
    }
    if (num == 0) {
        result = 0;
    } else if (num == 1 || num == 2) {
        result = 1;
    } else if (num > 2) {

        result = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);

        console.log(memo);

    }
    memo[num] = result;

    console.log(num, result, memo);

    return result;
}


// without memoization the complexity for the above function is 2^n while with memoization it is O(2n) ie O(n)


// using bottom-up

function fibBottomUp(n) {
    let arr = [];
    for (i = 0; i <= n; i++) {
        if (i == 1 || i == 2) {
            arr[i] = 1;
        } else {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }
    return arr[n];
}
console.log(fibBottomUp(6));