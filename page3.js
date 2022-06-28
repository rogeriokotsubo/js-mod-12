document.getElementById('btn-calc').addEventListener('click', calculate);

function calculate() {
  const resultPi= document.querySelector("#p-pi");
  const num1 = parseFloat(document.querySelector("#number1").value.replace(',','.'));

  try{
    checkValue(num1);
  } catch (errorMsg){
    resultFatorial.innerHTML=`${errorMsg}`;
    return;
  }

  const pi = calcPi(num1);
  resultPi.innerHTML=`Pi com ${num1} termos é 3.${pi}`;
}

function calcPi(num){
  let pi = BigInt(0);
  let tmp = BigInt(0);
  let count = 0;
  if (num===0){
    return 3;
  } else {
    for (let i=1; i<=num; i++){
      tmp = 1n;
      for (let j=i+i; j<=i+i+2; j++){
        tmp = tmp*BigInt(j);
      }
      tmp = 4n*(BigInt(10**100)/tmp);
      if (i % 2 === 0) {
        pi -= tmp ;
      } else {
        pi += tmp;
      }
    }
    return pi;
  }
}

function checkValue(num){
  if (isNaN(num)){
    throw new Error(`Não é número! (${num})`);
  }
  if (num<=0){
    throw new Error(`Entre com um inteiro positivo! (${num})`);
  }  
  if (Number.isInteger(num)===false){
    throw new Error(`Entre com um inteiro positivo! (${num})`);
  }  
}

