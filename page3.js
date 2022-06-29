document.getElementById('btn-calc').addEventListener('click', () => {calculate('nilakantha')});
document.getElementById('btn-calc1').addEventListener('click', () => {calculate('taylor')});

function calculate(serie) {
  const resultPi= document.querySelector("#p-pi");
  const num1 = parseFloat(document.querySelector("#number1").value.replace(',','.'));

  try{
    checkValue(num1);
  } catch (errorMsg){
    resultFatorial.innerHTML=`${errorMsg}`;
    return;
  }

  const initial = Date.now();
  const dIni = new Date(initial);
  let pi = 0n;
  const pi100 = BigInt('31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679');

  document.querySelector("#p-initial").innerHTML=`Início: ${dIni.toLocaleDateString()} - ${dIni.toLocaleTimeString()}`;  
  if (serie==='nilakantha') {
    pi = calcPi(num1);
    resultPi.innerHTML=`Pi com ${num1} termos é 3.${pi}`;
  } else {
    pi = calcPi2(num1);
    resultPi.innerHTML=`Pi com ${num1} termos é 3.${pi}`;
  }  
    
  const piCalc = BigInt('3'+pi);
  const precisao = 10n**100n-(pi100 - piCalc);
  const final = Date.now();
  const dFim = new Date(final);
  const processTime = final - initial;
  document.querySelector("#p-final").innerHTML=`Fim: ${dFim.toLocaleDateString()} - ${dFim.toLocaleTimeString()}`;
  document.querySelector("#p-time").innerHTML=`Tempo de processamento (segundos): ${processTime/1000}`;
  document.querySelector("#p-diff").innerHTML=`Precisão: ${precisao}`;
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
      tmp = 4n*(10n**100n/tmp);
      if (i % 2 === 0) {
        pi -= tmp ;
      } else {
        pi += tmp;
      }
    }
    return pi;
  }
}

function calcPi2(num){
  let i = 1n;
  let x = 3n * (10n ** 120n);
  let pi = x;
  while (x > 0) {
          x = x * i / ((i + 1n) * 4n);
          pi += x / (i + 2n);
          i += 2n;
  }
  return pi / (10n ** 20n) - (3n*(10n ** 100n));
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

