// backtracking

//base case - when there are no dice available
// else call for the other dice
// for 1 = 1to 6 for 2 


/*
    For each value the dice could have 
        choose a value 
        explore
        un-choose
*/
let calls = 0;
function printDiceRolls(dice, collection = [], sum) {
    calls++;
    if (dice == 0) {
        console.log(collection);
    } else {
        // fix one and call for the rest
        for (let i = 1; i <= 6; i++) {
            let sumSoFar = getSum(collection);
            if (i + sumSoFar + 1 * (dice - 1) <= sum && i + sumSoFar + 6 * (dice - 1) >= sum) {
                collection.push(i); // choose
                printDiceRolls(dice - 1, collection, sum); // explore
                collection.pop(); // unchoose
            }
        }
    }
}

function getSum(collection = []) {
    return collection.reduce((a, b) => { return a + b }, 0);
}
printDiceRolls(2, [], 9);