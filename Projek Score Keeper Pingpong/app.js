const papan = document.querySelector('#papan');
const ronde = document.querySelector('#ronde');
const jumlahRonde = document.querySelector('#jumlahRonde');
const plus1P1 = document.querySelector('#plus1P1');
const plus1P2 = document.querySelector('#plus1P2');
const reset = document.querySelector('#reset');
let nilaiP1 = 0;
let nilaiP2 = 0;


ronde.addEventListener('change', function (e) {
  console.log(e);
})
plus1P1.addEventListener('click', function (e) {
  nilaiP1 = nilaiP1 + 1;
  if (nilaiP1 == ronde.value) {
    papan.innerText = 'Player 1 Win';
  } else if (nilaiP1 >= ronde.value || nilaiP2 >= ronde.value) {
    papan.innerText = `Game is Over`;
  } else {
    papan.innerText = `${nilaiP1} to ${nilaiP2}`;
  }
})

plus1P2.addEventListener('click', function (e) {
  nilaiP2 = nilaiP2 + 1;
  if (nilaiP2 == ronde.value) {
    papan.innerText = 'Player 2 Win';
  } else if (nilaiP2 >= ronde.value || nilaiP1 >= ronde.value) {
    papan.innerText = 'Game is Over';
  } else {
    papan.innerText = `${nilaiP1} to ${nilaiP2}`
  }
})

reset.addEventListener('click', function (e) {
  papan.innerText = '0 to 0';
  nilaiP2 = 0;
  nilaiP1 = 0;
})
