let moves = 0;
function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
  if (n == 1) {
    console.log("Move ", n, " from ", from_rod, " to rod ", to_rod);
    return;
  }

  towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
  console.log("Move ", n, " from ", from_rod, " to rod ", to_rod);
  towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

towerOfHanoi(4, "A", "C", "B", 0);
