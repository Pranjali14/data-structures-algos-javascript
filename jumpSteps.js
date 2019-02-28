function minSteps(arr, l, end) {
    if (l == end) {
        console.log('indi', l, end);
        return 0;
    }
    if (arr[l] == 0) {
        return -1;
    }
    let min = arr.length;
    // 2--> 5
    for (let i = l + 1; i < l + arr[l] + 1; i++) {
        let jumps = minSteps(arr, i, end);

        if ((jumps + 1) < min) {
            min = jumps + 1;
            console.log('inside if', i, l, end, jumps);

        }
    }


    return min;

}

let stairs = [2, 5, 1];
console.log(minSteps(stairs, 0, stairs.length - 1));

// 2, 1, 2