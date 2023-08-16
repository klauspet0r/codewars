function queueTime(customers, numTills) {
 
  const customersPerTill = Math.ceil(customers.length / numTills);
  const tills = [];
  let max_numbers = [];
  let max_number = 0;
  let initialValue = 0;

  for (let i = 0; i < numTills; i++) {
    tills.push([]);
  }
  for (let i = 0; i < customers.length; i++) {
    const currentTillIndex = i % numTills;
    tills[currentTillIndex].push(customers[i]);
  }

  tills.forEach(till => {max_numbers.push(till.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue));  
    
  });

  max_numbers.forEach(element => { element > max_number ? max_number = element : max_number = max_number});
  return max_number;
}


console.log(queueTime([10,2,3,3], 2) == 10 ? 'Passed':'Failed');