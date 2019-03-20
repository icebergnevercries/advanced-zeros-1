module.exports = function getZerosCount(number, base) {
  const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 49, 51, 53, 59, 61]
  const arrayForBase = [], arrayForDegree = [], arrayForZeros = [];
  let countZeros = number;

  for(let i = 0, len = PRIMES.length, buff = base, degreeCount = 0; i < len; i++)
  {
    if(buff % PRIMES[i] == 0){      
      while(buff % PRIMES[i] == 0){
        buff /= PRIMES[i];
        degreeCount++;
      }
      arrayForBase.push(PRIMES[i]);
      arrayForDegree.push(degreeCount);
      degreeCount = 0;
    }     
    if(buff != 1 && i == len - 1){
      arrayForBase.push(buff);
      arrayForDegree.push(1); 
    } 
  }

  for(let i = 0, len = arrayForBase.length, buff = 0, degreeCount = 1; i < len; i++)
  {
    while(number > Math.pow(arrayForBase[i], degreeCount)){
      buff += Math.floor(number / Math.pow(arrayForBase[i], degreeCount));
      degreeCount++;
    }
    arrayForZeros.push(Math.floor(buff/arrayForDegree[i]));
    buff = 0;
    degreeCount = 1;         
  }

  for(let i = 0, len = arrayForZeros.length; i < len; i++){
    if(countZeros > arrayForZeros[i]){
      countZeros = arrayForZeros[i];
    }
  }

  return countZeros;
}