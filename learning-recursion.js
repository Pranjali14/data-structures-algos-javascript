// learning recursion using a simple program which prints *

function printUsingLoop(n) {
  let i = 1;
  while (i <= n) {
    console.log("using loop : ", "*");
    i++;
  }
}

//how do we write the above problem using recursion

function printUsingRecurion(n) {
  if (n == 0) {
    return;
  }
  console.log("using recursion : ", "*");
  n--;
  printUsingRecurion(n);
}

printUsingLoop(5);
printUsingRecurion(5);
