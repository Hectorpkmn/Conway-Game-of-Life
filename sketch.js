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
let squareSize = 40;

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
  // Starting a check through all the grid for the state of every cell
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      let x = i * squareSize;
      let y = j * squareSize;
      if (grid[i][j] == 1 ){
        // if cell is alive, then will be drawed as a white square
        fill(255);
        rect(x, y, squareSize, squareSize);
      }
    }
  }

  // creating another 2D Array for the next generation
  let nextGen = twoDimArray(cols, rows);

//  for (let i = 0; i < cols; i++){
//    for (let j = 0; j < rows; j++){
        //if (i == 0 || i == cols-1 || j == 0 || j == rows-1){} // avoiding edges to then give the same value as the next generation


//      let slot = 0; // variable to go to position of neighbours
//      slot += grid[i-1][j-1];
//      slot += grid[i][j-1];
//      slot += grid[i+1][j-1];
//      slot += grid[i][j-1];
//      slot += grid[i][j+1];
//      slot += grid[i-1][j+1];
//      slot += grid[i][j+1];
//      slot += grid[i+1][j+1];


//    }
//  }

// Need a way to count live neighbours
// But first it is need a way to count how many neighbours actually have the current position
// Also identify if the position is a edge

// Then the state may actually be check to the game of life rules
// let currentState;
// if (currentState == 0 && aliveNeighbours == 3){nextGen[i][j]=1}
// else if (currentState == 1 && aliveNeighbours < 2 || aliveNeighbours > 3){nextGen[i][j]=0}
// All other states would be the current state

//  grid = nextGen; //pass the values for the next run
}
