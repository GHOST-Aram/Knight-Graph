
export class KnightGraph{

    constructor(){
        

        //Adjacent nodes: One square perpendicular-one square diagonal

        //squarex to the top-left diagonal of the upper-square
        this.topTopLeft = null
        //squarex to the top-right diagonal of the upper-square
        this.topTopRight = null
        
        //squarex to the top-left diagonal of the left-square
        this.leftTopLeft = null

        //squarex to the bottom-left diagonal of the left-square
        this.leftBottomLeft = null
        
        //squarex to the bottom-left diagonal of the bottom-square
        this.bottomBottomLeft = null

        //Squarex to the bottom-right diagonal of the bottom-square
        this.bottomBottomRight = null
        
        //Squarex to the bottom-right diagonal of the right-square
        this.rightBottomRight = null

        //Squarex to the top-right diagonal of the right-square
        this.rightTopRight = null

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