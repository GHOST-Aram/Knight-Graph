import { Node } from "./node.js";
import { Board } from "./board.js";

class KnightGraph extends Node{
    constructor(node){
        super(node.file, node.rank)

        //Adjacent nodes: One square perpendicular-one square diagonal

        //squarex to the top-left diagonal of the upper-square
        this.topTopLeft = this.#createNode((this.file - 1), (this.rank + 2))

        //squarex to the top-right diagonal of the upper-square
        this.topTopRight = this.#createNode((this.file + 1), (this.rank + 2))
        
        //squarex to the top-left diagonal of the left-square
        this.leftTopLeft = this.#createNode((this.file - 2), (this.rank + 1))

        //squarex to the bottom-left diagonal of the left-square
        this.leftBottomLeft = this.#createNode((this.file - 2), (this.rank - 1))
        
        //squarex to the bottom-left diagonal of the bottom-square
        this.bottomBottomLeft = this.#createNode((this.file + 1), (this.rank - 2))

        //Squarex to the bottom-right diagonal of the bottom-square
        this.bottomBottomRight = this.#createNode((this.file + 1), (this.rank - 2))
        
        //Squarex to the bottom-right diagonal of the right-square
        this.rightBottomRight = this.#createNode((this.file + 2), (this.rank - 1))

        //Squarex to the top-right diagonal of the right-square
        this.rightTopRight = this.#createNode((this.file + 2), (this.rank + 1))

    }

    //Create Node
    #createNode(file, rank){
        if((file < 0 || file > 7) || (rank < 0 || rank > 7))
            return null
        else
            return new Node (file, rank)
    }
}

const board = new Board()


const nightGra  =  new KnightGraph(board.ranks[3][3])
console.log(nightGra)