document.getElementById('btn-calc').addEventListener('click', calculate);

function calculate() {
  const resultFatorial= document.querySelector("#p-fatorial");
  const resultEuler= document.querySelector("#p-euler");
  const num1 = parseFloat(document.querySelector("#number1").value.replace(',','.'));

  try{
    checkValue(num1);
  } catch (errorMsg){
    resultFatorial.innerHTML=`${errorMsg}`;
    return;
  }

  const fatorial = calcFatorial(num1);
  resultFatorial.innerHTML=`Fatorial de ${num1} é ${fatorial}`;

  let euler = BigInt(1);
  let tmp = BigInt(1);
  for (let j=2; j<=num1; j++){
    euler += 10n**100n/calcFatorial(j);
  }

  resultEuler.innerHTML=`Número de Euler com ${num1} termos: 2.${euler}`;
}

function calcFatorial(num){
  let fatorial = BigInt(1);
  if (num===0){
    return fatorial;
  } else {
    for (let i=1; i<=num; i++){
      fatorial = fatorial*BigInt(i);
    }  
    return fatorial;
  }
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