let array = ["GW-12", "1F1", "1F45", "R4", "R1"];

array.sort((a, b) => {
    // Extract the number from each element
    let numA = parseInt(a.match(/\d+$/)[0]);
    let numB = parseInt(b.match(/\d+$/)[0]);
  
    // Compare the extracted numbers
    return numA - numB;
  });

console.log(array);