function isIsogram(str){
  //create a map of all letters and count occurances, if any occurance above 1 then no isogram
  let letterMap = new Map();
  let isIsogram = true;  
  [...str].forEach((e) => 
  {     
        e = e.toLowerCase();
        if (letterMap.has(e.toString()))
        {
            isIsogram = false;
            return isIsogram;
        } 
        else
        {
          letterMap.set(e, 1);
        }
  }
      
  )
  return isIsogram;
}


console.log(isIsogram('abcd'));