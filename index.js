function queueTime(customers, numTills) {
  const tills = new Array(numTills).fill(0);
  let currentTime = 0;

  while (customers.length > 0) {
    for (let i = 0; i < numTills; i++) {
      if (tills[i] <= currentTime && customers.length > 0) {
        const checkoutTime = customers.shift();
        tills[i] = currentTime + checkoutTime;
      }
    }
    currentTime++;
  }
  let max_time = 0;

  tills.forEach( element => {if (element > max_time) max_time = element});

  return max_time;
}

console.log(queueTime([10,2,3,3], 2) == 10 ? 'Passed':'Failed');