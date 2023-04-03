import { Board } from "./module/board.js";

//Find path from current position to target
const board = new Board()

//Position knight
board.positionKnight(0,0)

//Get square with knight
const startSqr = board.getSquare(0, 0)

console.log(startSqr)