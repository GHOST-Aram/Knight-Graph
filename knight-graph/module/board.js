import { KnightGraph } from "./knight-graph.js"
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

    createKnightGraph(node){

        const graph = new KnightGraph()
            
        //Adjacent nodes: One square perpendicular-one square diagonal

        //squarex to the top-left diagonal of the upper-square
        graph.topTopLeft = this.getUnvisitedSquare((node.file - 1), (node.rank + 2))

        //squarex to the top-right diagonal of the upper-square
        graph.topTopRight = this.getUnvisitedSquare((node.file + 1), (node.rank + 2))
        
        //squarex to the top-left diagonal of the left-square
        graph.leftTopLeft = this.getUnvisitedSquare((node.file - 2), (node.rank + 1))

        //squarex to the bottom-left diagonal of the left-square
        graph.leftBottomLeft = this.getUnvisitedSquare((node.file - 2), (node.rank - 1))
        
        //squarex to the bottom-left diagonal of the bottom-square
        graph.bottomBottomLeft = this.getUnvisitedSquare((node.file - 1), (node.rank - 2))

        //Squarex to the bottom-right diagonal of the bottom-square
        graph.bottomBottomRight = this.getUnvisitedSquare((node.file + 1), (node.rank - 2))
        
        //Squarex to the bottom-right diagonal of the right-square
        graph.rightBottomRight = this.getUnvisitedSquare((node.file + 2), (node.rank - 1))

        //Squarex to the top-right diagonal of the right-square
        graph.rightTopRight = this.getUnvisitedSquare((node.file + 2), (node.rank + 1))

        
        return graph
    }

    //Get square
    getSquare(file, rank){
        //Return null if coordinate is not in board
        if((file < 0 || file > 7) || (rank < 0 || rank > 7))
            return null
        return this.ranks[rank][file]
    }

    // Get unvisited aquares
    getUnvisitedSquare(file, rank){
        // Get square
        const square = this.getSquare(file, rank)

        // Check if unvisited
        if (square && square.visited === false){
            // Return
            return square
        }
        
        this.markAsVisited(square)
        // Return null if square is visited or square is null
        return null

    }
    // Mark as visited
    markAsVisited(square){
        if(square)
        this.ranks.forEach(
            rank => rank.forEach(
                node => {
                if(node.rank === square.rank && node.file === square.file)
                    node.visited = true

            })
        );
    }
    //Position Knight
    positionKnight(file, rank){
        if((file < 0 || file > 7) || (rank < 0 || rank > 7))
            throw `IllegalMove: square ${[file, rank]} is not in the board`
        this.ranks[rank][file].piece = 'Knight'

        // Mark as visited
        this.markAsVisited(this.getSquare(file, rank))
    }


}

const board = new Board()

// board.createKnightGraph()
// board.positionKnight(0,0)
// console.log(board.getSquare(2, 7))
