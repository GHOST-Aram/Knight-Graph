import { Node } from "./node.js";
import { Board } from "./board.js";

export class KnightGraph extends Node{
    /**
     * 
     * @param {*} node
     * KnightGraph constructor takes a node of the chess Board
     * and returns a new instance of the node with the additional properties
     * containing adjacent nodes/squares that are all possible moves that
     * the knight can make
     * 
     * If either rank or file is negative or greater than 7,
     * the constructor will return null instead of an adjacent node
     * at that position
     */
    //Instanciate board
    board = new Board()
    
    constructor(node){
        super(node.file, node.rank)

        //Adjacent nodes: One square perpendicular-one square diagonal

        //squarex to the top-left diagonal of the upper-square
        this.topTopLeft = this.board.getUnvisitedSquare((this.file - 1), (this.rank + 2))

        //squarex to the top-right diagonal of the upper-square
        this.topTopRight = this.board.getUnvisitedSquare((this.file + 1), (this.rank + 2))
        
        //squarex to the top-left diagonal of the left-square
        this.leftTopLeft = this.board.getUnvisitedSquare((this.file - 2), (this.rank + 1))

        //squarex to the bottom-left diagonal of the left-square
        this.leftBottomLeft = this.board.getUnvisitedSquare((this.file - 2), (this.rank - 1))
        
        //squarex to the bottom-left diagonal of the bottom-square
        this.bottomBottomLeft = this.board.getUnvisitedSquare((this.file - 1), (this.rank - 2))

        //Squarex to the bottom-right diagonal of the bottom-square
        this.bottomBottomRight = this.board.getUnvisitedSquare((this.file + 1), (this.rank - 2))
        
        //Squarex to the bottom-right diagonal of the right-square
        this.rightBottomRight = this.board.getUnvisitedSquare((this.file + 2), (this.rank - 1))

        //Squarex to the top-right diagonal of the right-square
        this.rightTopRight = this.board.getUnvisitedSquare((this.file + 2), (this.rank + 1))

    }

   
    getNeighbors(){
        //Create an array of all the adjacent nodes
        let neighbors = [
            this.topTopLeft, this.topTopRight,
            this.leftTopLeft, this.leftBottomLeft,
            this.rightTopRight, this.rightBottomRight,
            this.bottomBottomLeft, this.bottomBottomRight
        ]

        //Eliminate null neighbors
        return neighbors.filter(neighbor => {
            return neighbor !== null
        })
    }
     
}