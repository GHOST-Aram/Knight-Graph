import {KnightGraph} from './module/knight-graph.js'
/**
 * 
 * @param {*} start Start position of the knight
 * @param {*} target The position on board at which the knight is supposed to move
 * This function traces the path of the Knight from the start position to the
 * target square using BFS algorithm
 */
export function findPath(start, target){
    //Set start node as visited
    start.visited = true

    //Create a KnightGraph object
    const graph = new KnightGraph(start)

    //Create an array of all the adjacent nodes
    const neighbors = [
        graph.topTopLeft, graph.topTopRight,
        graph.leftTopLeft, graph.leftBottomLeft,
        g
    ]

}