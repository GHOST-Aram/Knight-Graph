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
                let squareNode = new Node(file, rank)

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

    //Create night graph: Coonect all sqares on board to all possible knight moves of each
    createKnightGraph(){
        this.ranks.forEach(rank => {
            rank.forEach(sqaureNode =>{

                sqaureNode.topTopLeft = new Node((sqaureNode.file - 1), (sqaureNode.rank + 2))

                sqaureNode.topTopRight = new Node((sqaureNode.file + 1), (sqaureNode.rank + 2))
                
                sqaureNode.leftTopLeft = new Node((sqaureNode.file - 2), (sqaureNode.rank + 1))

                sqaureNode.leftBottomLeft = new Node((sqaureNode.file - 2), (sqaureNode.rank - 1))
                
                sqaureNode.bottomBottomLeft = new Node((sqaureNode.file + 1), (sqaureNode.rank - 2))

                sqaureNode.bottomBottomRight = new Node((sqaureNode.file + 1), (sqaureNode.rank - 2))
                
                sqaureNode.rightBottomRight = new Node((sqaureNode.file + 2), (sqaureNode.rank - 1))

                sqaureNode.rightTopRight = new Node((sqaureNode.file + 2), (sqaureNode.rank + 1))

            })
        });

        return this.ranks
    }
}
const board = new Board ()

let knightGraph = board.createKnightGraph()

console.log(knightGraph)

