document.getElementById('btn-calc').addEventListener('click', searchPrime);

function searchPrime() {
  const resultPrimes= document.querySelector("#p-prime");
  const resultList= document.querySelector("#p-list");
  const num1 = parseFloat(document.querySelector("#number1").value.replace(',','.'));

  try{
    checkValue(num1);
  } catch (errorMsg){
    resultFatorial.innerHTML=`${errorMsg}`;
    return;
  }

  const prime = search(num1);
  resultPrimes.innerHTML=`Número de primos entre 0 e ${num1} é ${prime.primes}`;
  resultList.innerHTML=`Lista de Números Primos: ${prime.list}`;
}

function search(num){
  let list = '';
  let primes = 0;
  let dividers = 0;
  for (let i=2; i<=num; i++){
    dividers = 0;
    for (let j=2; j<=Math.ceil(i/2); j++){
      if (i%j===0){
        dividers = 1;
        break;
      }
    }
    if (dividers===0){
      primes += 1;
      if (primes===1){
        list = i;          
      } else {
        list += ', '+i;          
      }  
    }
  }
  return {primes, list};
}


function checkValue(num){
  if (isNaN(num)){
    throw new Error(`Não é número! (${num})`);
  }
  if (num<0){
    throw new Error(`Entre com um inteiro positivo! (${num})`);
  }  
  if (Number.isInteger(num)===false){
    throw new Error(`Entre com um inteiro positivo! (${num})`);
  }  
}