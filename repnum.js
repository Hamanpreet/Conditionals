const repeatNumbers = function(data) {
  result = "";
  
  for(let i = 0; i < data.length; i++) {
    const value = data[i][0];
    const times = data[i][1];
    if( i !== 0) {
      result = result + ", ";
    }
   
    for(let j = 0; j < times; j++) {
      result +=value.toString();
    }
  }
  return result;
  
}
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[1, 10]]));