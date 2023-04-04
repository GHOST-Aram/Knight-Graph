import { Node } from "./node.js"
export class Board{
    constructor(){
        let rank = 0
        
        //Represent the whole board of 8 * 8 squares
        this.ranks = []
        
        //Create nodes in 8 * 8 Array of nodes
        while(rank < 8){//For every rank
            
            //Reset file pointer
            let file = 0
            //Make an empty array of rank squares
            let rankSquares = []

            while(file < 8) {//For every file

                //Create a square node for each coordinate
                let squareNode = new Node (file, rank)

                //Push the new file squared node to rank Squares array
                rankSquares.push(squareNode)

                //Increment file
                file ++
            }
            //Once the rank is full with 8 squares, 
            // push the rank to the sqaures array 8 times creating a full board of 64 squares
            this.ranks.push(rankSquares)

            //Increment ranks
            rank ++
        }
    }

    //Get square
    getSquare(file, rank){
        //Return null if coordinate is not in board
        if((file < 0 || file > 7) || (rank < 0 || rank > 7))
            return null
        return this.ranks[rank][file]
    }

    //Position Knight
    positionKnight(file, rank){
        if((file < 0 || file > 7) || (rank < 0 || rank > 7))
            throw `IllegalMove: square ${[file, rank]} is not in the board`
        this.ranks[rank][file].piece = 'Knight'
    }


}

const board = new Board()

// board.createKnightGraph()
// board.positionKnight(0,0)
// console.log(board.getSquare(2, 7))
