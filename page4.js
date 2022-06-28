
document.getElementById('btn-shuffle').addEventListener('click', shuffle);
document.getElementById('btn-play').addEventListener('click', play);
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');



function shuffle() {
  card1.style.backgroundImage = "";
  card2.style.backgroundImage = "";
  card3.style.backgroundImage = "";
  card4.style.backgroundImage = "";
  card5.style.backgroundImage = "";

  for (let i=0; i<51; i++){
    cards[i].random = Math.random();
  }

  sort();

  console.log(cards);
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
  let urlString = 'url(./assets/img/' + cards[0].img+')';
  card1.style.backgroundImage = urlString;
  urlString = 'url(./assets/img/' + cards[1].img+')';
  card2.style.backgroundImage = urlString;
  urlString = 'url(./assets/img/' + cards[2].img+')';
  card3.style.backgroundImage = urlString;
  urlString = 'url(./assets/img/' + cards[3].img+')';
  card4.style.backgroundImage = urlString;
  urlString = 'url(./assets/img/' + cards[4].img+')';
  card5.style.backgroundImage = urlString;
 
}


let cards = [
  {"id": 1, "card": "A", "suit": "heart", "img": "AH.svg", "random": 0},
  {"id": 2, "card": "2", "suit": "heart", "img": "2H.svg", "random": 0},
  {"id": 3, "card": "3", "suit": "heart", "img": "3H.svg", "random": 0},
  {"id": 4, "card": "4", "suit": "heart", "img": "4H.svg", "random": 0},
  {"id": 5, "card": "5", "suit": "heart", "img": "5H.svg", "random": 0},
  {"id": 6, "card": "6", "suit": "heart", "img": "6H.svg", "random": 0},
  {"id": 7, "card": "7", "suit": "heart", "img": "7H.svg", "random": 0},
  {"id": 8, "card": "8", "suit": "heart", "img": "8H.svg", "random": 0},
  {"id": 9, "card": "9", "suit": "heart", "img": "9H.svg", "random": 0},
  {"id":10, "card": "T", "suit": "heart", "img": "TH.svg", "random": 0},
  {"id":11, "card": "J", "suit": "heart", "img": "JH.svg", "random": 0},
  {"id":12, "card": "Q", "suit": "heart", "img": "QH.svg", "random": 0},
  {"id":13, "card": "K", "suit": "heart", "img": "KH.svg", "random": 0},
  {"id":14, "card": "A", "suit": "club", "img": "AC.svg", "random": 0},
  {"id":15, "card": "2", "suit": "club", "img": "2C.svg", "random": 0},
  {"id":16, "card": "3", "suit": "club", "img": "3C.svg", "random": 0},
  {"id":17, "card": "4", "suit": "club", "img": "4C.svg", "random": 0},
  {"id":18, "card": "5", "suit": "club", "img": "5C.svg", "random": 0},
  {"id":19, "card": "6", "suit": "club", "img": "6C.svg", "random": 0},
  {"id":20, "card": "7", "suit": "club", "img": "7C.svg", "random": 0},
  {"id":21, "card": "8", "suit": "club", "img": "8C.svg", "random": 0},
  {"id":22, "card": "9", "suit": "club", "img": "9C.svg", "random": 0},
  {"id":23, "card": "T", "suit": "club", "img": "TC.svg", "random": 0},
  {"id":24, "card": "J", "suit": "club", "img": "JC.svg", "random": 0},
  {"id":25, "card": "Q", "suit": "club", "img": "QC.svg", "random": 0},
  {"id":26, "card": "K", "suit": "club", "img": "KC.svg", "random": 0},
  {"id":27, "card": "A", "suit": "diamond", "img": "AD.svg", "random": 0},
  {"id":28, "card": "2", "suit": "diamond", "img": "2D.svg", "random": 0},
  {"id":29, "card": "3", "suit": "diamond", "img": "3D.svg", "random": 0},
  {"id":30, "card": "4", "suit": "diamond", "img": "4D.svg", "random": 0},
  {"id":31, "card": "5", "suit": "diamond", "img": "5D.svg", "random": 0},
  {"id":32, "card": "6", "suit": "diamond", "img": "6D.svg", "random": 0},
  {"id":33, "card": "7", "suit": "diamond", "img": "7D.svg", "random": 0},
  {"id":34, "card": "8", "suit": "diamond", "img": "8D.svg", "random": 0},
  {"id":35, "card": "9", "suit": "diamond", "img": "9D.svg", "random": 0},
  {"id":36, "card": "T", "suit": "diamond", "img": "TD.svg", "random": 0},
  {"id":37, "card": "J", "suit": "diamond", "img": "JD.svg", "random": 0},
  {"id":38, "card": "Q", "suit": "diamond", "img": "QD.svg", "random": 0},
  {"id":39, "card": "K", "suit": "diamond", "img": "KD.svg", "random": 0},
  {"id":40, "card": "A", "suit": "spade", "img": "AS.svg", "random": 0},
  {"id":41, "card": "2", "suit": "spade", "img": "2S.svg", "random": 0},
  {"id":42, "card": "3", "suit": "spade", "img": "3S.svg", "random": 0},
  {"id":43, "card": "4", "suit": "spade", "img": "4S.svg", "random": 0},
  {"id":44, "card": "5", "suit": "spade", "img": "5S.svg", "random": 0},
  {"id":45, "card": "6", "suit": "spade", "img": "6S.svg", "random": 0},
  {"id":46, "card": "7", "suit": "spade", "img": "7S.svg", "random": 0},
  {"id":47, "card": "8", "suit": "spade", "img": "8S.svg", "random": 0},
  {"id":48, "card": "9", "suit": "spade", "img": "9S.svg", "random": 0},
  {"id":49, "card": "T", "suit": "spade", "img": "TS.svg", "random": 0},
  {"id":50, "card": "J", "suit": "spade", "img": "JS.svg", "random": 0},
  {"id":51, "card": "Q", "suit": "spade", "img": "QS.svg", "random": 0},
  {"id":52, "card": "K", "suit": "spade", "img": "KS.svg", "random": 0}];
  
  