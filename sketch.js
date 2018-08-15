// Creating a 2D Array that will be required for the grid
function twoDimArray(cols, rows){
  let array = new Array(cols);
  for (let i = 0; i < array.length; i++ ){
    array[i] = new Array(rows);
  }
  return array;
}

// Global variables
let grid;
let cols = 10;
let rows = 10;

function setup (){
  createCanvas(400,400);
  grid = twoDimArray(cols, rows); // giving an empty 2D array structure to grid
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      grid[i][j] = floor(random(2));  // Filling the grid with rounded random 1's and 0's
    }
  }
}

function draw(){
  background(0);
}
