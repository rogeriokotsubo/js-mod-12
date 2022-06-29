
document.getElementById('btn-shuffle').addEventListener('click', shuffle);
document.getElementById('btn-play').addEventListener('click', play);
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const msg = document.getElementById('p-deck');
let round = 0;

function shuffle() {
  round = 0;
  msg.innerHTML=` `;
  card1.style.backgroundImage = "";
  card2.style.backgroundImage = "";
  card3.style.backgroundImage = "";
  card4.style.backgroundImage = "";
  card5.style.backgroundImage = "";

  for (let i=0; i<51; i++){
    cards[i].random = Math.random();
  }

  sort();

  function sort(){
    cards.sort(function (a,b){
      if (a.random>b.random){
        return 1;
      } else if (a.random<b.random){
        return -1;
      } 
      return 0;   
    })
  }
}

function play() {
  round += 1;
  if (round > 10){
    msg.innerHTML=`Não há número suficiente de cartas`;
    return;
  }

  // limpando deck e suit
  let cardId = 0;
  for (let i=0; i<13; i++){
    deck[i].n=0;
    if (i<4){
      suit[i] = 0;
    }
  };

  let cardIni = (round-1)*5;
  let urlString = 'url(./assets/img/' + cards[0+cardIni].img+')';
  card1.style.backgroundImage = urlString;
  urlString = 'url(./assets/img/' + cards[1+cardIni].img+')';
  card2.style.backgroundImage = urlString;
  urlString = 'url(./assets/img/' + cards[2+cardIni].img+')';
  card3.style.backgroundImage = urlString;
  urlString = 'url(./assets/img/' + cards[3+cardIni].img+')';
  card4.style.backgroundImage = urlString;
  urlString = 'url(./assets/img/' + cards[4+cardIni].img+')';
  card5.style.backgroundImage = urlString;

  for (i = 0+cardIni; i < 5+cardIni; i++){
    if (cards[i].id % 13 === 0){
      cardId = 12;
    } else {
      cardId = cards[i].id % 13 - 1;
    };
    deck[cardId].n += 1;
    suit[cards[i].suit] += 1;
  }

  let color = 0;
  let sequencia = 0;
  let dupla = 0;
  let trinca = 0;
  let quadra = 0;

  for (i=0; i<13; i++){
    if (deck[i].n===2){
      dupla += 1;
    }
    if (deck[i].n===3){
      trinca += 1;
    }
    if (deck[i].n===4){
      quadra += 1;
    }
    if (deck[i].n===1){
      sequencia += 1;
    } else {
      sequencia = 0;
    }
  }

  for (i=0; i<4; i++){
    if (suit[i]===5){
      color = 1;  // 5 cartas do mesmo naipe
    }
  }

  if (sequencia===5 && color===1){       // 5 cartas em sequencia do mesmo naipe
    msg.innerHTML=`Straight Flush !!!!!!!`;
  } else if (quadra===1){                // 4 cartas iguais
    msg.innerHTML=`Quadra !!!!!!`;
  } else if (trinca===1 && dupla===1){  // 1 trinca e 1 dupla
    msg.innerHTML=`Full House !!!!!`;
  } else if (sequencia===5){             // 5 cartas na sequencia
    msg.innerHTML=`Sequencia !!!!`;
  } else if (trinca===1){                // 1 trinca
    msg.innerHTML=`Trinca !!!`;
  } else if (dupla===2){                // 2 duplas
    msg.innerHTML=`Duas Duplas !!`;
  } else if (dupla===1){                // 1 dupla
    msg.innerHTML=`Uma Dupla !`;
  } else {
    msg.innerHTML=`Nada`;
  };
}

let cards = [
  {"id": 1, "card": "A", "suit": 0, "img": "AH.svg", "random": 0},
  {"id": 2, "card": "2", "suit": 0, "img": "2H.svg", "random": 0},
  {"id": 3, "card": "3", "suit": 0, "img": "3H.svg", "random": 0},
  {"id": 4, "card": "4", "suit": 0, "img": "4H.svg", "random": 0},
  {"id": 5, "card": "5", "suit": 0, "img": "5H.svg", "random": 0},
  {"id": 6, "card": "6", "suit": 0, "img": "6H.svg", "random": 0},
  {"id": 7, "card": "7", "suit": 0, "img": "7H.svg", "random": 0},
  {"id": 8, "card": "8", "suit": 0, "img": "8H.svg", "random": 0},
  {"id": 9, "card": "9", "suit": 0, "img": "9H.svg", "random": 0},
  {"id":10, "card": "T", "suit": 0, "img": "TH.svg", "random": 0},
  {"id":11, "card": "J", "suit": 0, "img": "JH.svg", "random": 0},
  {"id":12, "card": "Q", "suit": 0, "img": "QH.svg", "random": 0},
  {"id":13, "card": "K", "suit": 0, "img": "KH.svg", "random": 0},
  {"id":14, "card": "A", "suit": 1, "img": "AC.svg", "random": 0},
  {"id":15, "card": "2", "suit": 1, "img": "2C.svg", "random": 0},
  {"id":16, "card": "3", "suit": 1, "img": "3C.svg", "random": 0},
  {"id":17, "card": "4", "suit": 1, "img": "4C.svg", "random": 0},
  {"id":18, "card": "5", "suit": 1, "img": "5C.svg", "random": 0},
  {"id":19, "card": "6", "suit": 1, "img": "6C.svg", "random": 0},
  {"id":20, "card": "7", "suit": 1, "img": "7C.svg", "random": 0},
  {"id":21, "card": "8", "suit": 1, "img": "8C.svg", "random": 0},
  {"id":22, "card": "9", "suit": 1, "img": "9C.svg", "random": 0},
  {"id":23, "card": "T", "suit": 1, "img": "TC.svg", "random": 0},
  {"id":24, "card": "J", "suit": 1, "img": "JC.svg", "random": 0},
  {"id":25, "card": "Q", "suit": 1, "img": "QC.svg", "random": 0},
  {"id":26, "card": "K", "suit": 1, "img": "KC.svg", "random": 0},
  {"id":27, "card": "A", "suit": 2, "img": "AD.svg", "random": 0},
  {"id":28, "card": "2", "suit": 2, "img": "2D.svg", "random": 0},
  {"id":29, "card": "3", "suit": 2, "img": "3D.svg", "random": 0},
  {"id":30, "card": "4", "suit": 2, "img": "4D.svg", "random": 0},
  {"id":31, "card": "5", "suit": 2, "img": "5D.svg", "random": 0},
  {"id":32, "card": "6", "suit": 2, "img": "6D.svg", "random": 0},
  {"id":33, "card": "7", "suit": 2, "img": "7D.svg", "random": 0},
  {"id":34, "card": "8", "suit": 2, "img": "8D.svg", "random": 0},
  {"id":35, "card": "9", "suit": 2, "img": "9D.svg", "random": 0},
  {"id":36, "card": "T", "suit": 2, "img": "TD.svg", "random": 0},
  {"id":37, "card": "J", "suit": 2, "img": "JD.svg", "random": 0},
  {"id":38, "card": "Q", "suit": 2, "img": "QD.svg", "random": 0},
  {"id":39, "card": "K", "suit": 2, "img": "KD.svg", "random": 0},
  {"id":40, "card": "A", "suit": 3, "img": "AS.svg", "random": 0},
  {"id":41, "card": "2", "suit": 3, "img": "2S.svg", "random": 0},
  {"id":42, "card": "3", "suit": 3, "img": "3S.svg", "random": 0},
  {"id":43, "card": "4", "suit": 3, "img": "4S.svg", "random": 0},
  {"id":44, "card": "5", "suit": 3, "img": "5S.svg", "random": 0},
  {"id":45, "card": "6", "suit": 3, "img": "6S.svg", "random": 0},
  {"id":46, "card": "7", "suit": 3, "img": "7S.svg", "random": 0},
  {"id":47, "card": "8", "suit": 3, "img": "8S.svg", "random": 0},
  {"id":48, "card": "9", "suit": 3, "img": "9S.svg", "random": 0},
  {"id":49, "card": "T", "suit": 3, "img": "TS.svg", "random": 0},
  {"id":50, "card": "J", "suit": 3, "img": "JS.svg", "random": 0},
  {"id":51, "card": "Q", "suit": 3, "img": "QS.svg", "random": 0},
  {"id":52, "card": "K", "suit": 3, "img": "KS.svg", "random": 0}];
  
let deck = [];
  for (let i=0; i<13; i++){
    deck[i]={"card": cards[i].card, "n": 0};
  };

let suit = [];
    suit [0] = 0; // heart
    suit [1] = 0; // club 
    suit [2] = 0; // diamond
    suit [3] = 0; // spade  
