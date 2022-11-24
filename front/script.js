const number = '';
const ids = ['param_1','param_2','param_3','param_4','param_5','param_6'];
const param = [];
const state = {

  grid: Array(5)
  .fill()
  .map(() => Array(5).fill('')),
currentRow: 0,
currentCol: 0,
}; 

function updateGrid(){
  for (let i = 0; i < state.grid.length; i++){
    for (let j = 0; j < state.grid[i].length; j++) {
      const box = document.getElementById(`box${i}${j}`);
      box.textContent = state.grid[i][j];
    }
  }
}
function refresh_page(){
window.location = window.location.href;
}

function drawBox(container, row, col, number = ''){
  const box = document.createElement('div');
  box.className = 'box';
  box.id = `box${row}${col}`;
  box.textContent = number;

  container.appendChild(box);
  return box;
}

function drawGrid(container){
  const grid = document.createElement('div');
  grid.className = 'grid';
  for (let i = 0; i < 5; i++){
    for(let j = 0; j < 6; j++){
      drawBox(grid, i, j);
    }
  }
  container.appendChild(grid);
}

function getCurrentNum() {
  return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
}
function isValid(num){
  return equacoes.includes(num);
}
function get_param(){

  const row = state.currentRow
  for (let i = 0; i < 6; i++){
    const box = document.getElementById(`box${row}${i}`);
    param[i] = box.textContent;
  }
  const MyObject = Object.assign(...ids.map((x, y) => ({[x]: param[y]})));
  return (MyObject)
}

async function post_eq(url) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'}
  });
  return response.json();
}

async function post_answer(url , obj) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(obj)
  })
  .then((resp) => resp.json())
  .then(result => {console.log(result); });
  return resp.json();
}

function revealNum(guess) {
  const row = state.currentRow
  const answer = post_answer('http://localhost:3000/api/attempt' ,get_param());
  console.log(answer);
  for (let i = 0; i < 6; i++){
    const box = document.getElementById(`box${row}${i}`);
    console.log(answer[i]);
    if (answer[i] === 'C') {
    box.classList.add('ok');
  }
    else if (answer[i] === 'T') {
      box.classList.add('n-ok');
  }
    else {
      box.classList.add('fail');
    }
  }
  const isWinner = state.secret === guess;
  const isGameOver = state.currentRow === 4;

  if (isWinner) {
    alert('You win! Congratulations!');
  }
  else if (isGameOver) {
    document.getElementById('try-again').classList.add('game');
    document.getElementById('jogo').classList = 'jogo';
  }
}

function isNum(key) {
  return key.length === 1 && key.match(/['0','1','2','3','4','5','6','7','8','9','*','/','+',]/i);
}

function addNumup(num) {
  if (state.currentCol === 6) return;
  state.grid[state.currentRow][state.currentCol] = num;
  state.currentCol++;
  updateGrid();
}

function sendTry() {
    if (state.currentCol === 6){
      const num = getCurrentNum();
        revealNum(num);
        state.currentRow++;
        state.currentCol = 0;
    } 
}

function removeNum()
 {
  if (state.currentCol === 0) return;
  state.grid[state.currentRow][state.currentCol - 1] = '';
  state.currentCol--;
  updateGrid()
 }

function startup() {
  const game = document.getElementById('game');
  drawGrid(game);
}

function start_game() {
startup();
const jogo = document.getElementById('jogo');
const sbutton = document.getElementById('sbutton');
jogo.classList.add('show');
sbutton.classList.add('hide');
const equacao = Object.values(post_eq('http://localhost:3000/api/newgame'));
}
