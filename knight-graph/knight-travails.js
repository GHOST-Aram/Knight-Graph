import { Board } from "./module/board.js";
import {KnightGraph} from "./module/knight-graph.js";
import { Finder } from "./module/path-finder.js";
//Find path from current position to target
const board = new Board()

//Position knight
board.positionKnight(0,0)

//Get square with knight
const startSqr = board.getSquare(0, 0)

//Get targetSquare
const targetSquare = board.getSquare(2,1)



 //Create a KnightGraph object
 const graph = new KnightGraph(startSqr)

 //Create an array of all the adjacent nodes
 let neighbors = [
    graph.topTopLeft, graph.topTopRight,
    graph.leftTopLeft, graph.leftBottomLeft,
    graph.rightTopRight, graph.rightBottomRight,
    graph.bottomBottomLeft, graph.bottomBottomRight
 ]

 //Eliminate null neighbors
 neighbors = neighbors.filter(neighbor => {
    return neighbor !== null
 })

//Create pathFinder
const pathFinder = new Finder(startSqr, targetSquare)

//Get path
const path = pathFinder.findPath(neighbors)


// console.log()
// neighbors.forEach(node => console.log(node))
