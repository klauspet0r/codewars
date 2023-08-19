function findOdd(A) {
  let numberMap = new Map();

  A.forEach(e => 
    {
      if (numberMap.has(e))
        {
           numberMap.set(e, numberMap.get(e) + 1)
        } 
        else
        {
          numberMap.set(e, 1);
        }
    });
  
    let retVal;

    for (const [key, value] of numberMap) 
    {
      if (value%2 != 0)
      {
        retVal = key;      
      }
    }
  return retVal;
}


console.log(findOdd([1,1,4, 2, 2]) == 4 ? 'Passed' : 'Failed');