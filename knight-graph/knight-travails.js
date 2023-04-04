import { Board } from "./module/board.js";
import { Finder } from "./module/path-finder.js";
//Find path from current position to target
const board = new Board()

//Position knight
board.positionKnight(3, 3)

//Get square with knight
const startSqr = board.getSquare(3, 3)

//Get targetSquare
const targetSquare = board.getSquare(0, 0)



 

 

//Create pathFinder
const pathFinder = new Finder(targetSquare)

//Get path
const path = pathFinder.findPath(startSqr)


console.log(path)
// neighbors.forEach(node => console.log(node))
