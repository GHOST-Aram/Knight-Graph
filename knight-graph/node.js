export class Node {
    constructor(file, rank){

        //Record rank anf file
        this.rank = rank
        this.file = file

        //Adjacent nodes: One square perpendicular-one square diagonal

        //square to the top-left diagonal of the upper-square
        this.topTopLeft = null

        //square to the top-right diagonal of the upper-square
        this.topTopRight = null
        
        //square to the top-left diagonal of the left-square
        this.leftTopLeft = null

        //square to the bottom-left diagonal of the left-square
        this.leftBottomLeft = null
        
        //square to the bottom-left diagonal of the bottom-square
        this.bottomBottomLeft = null

        //Square to the bottom-right diagonal of the bottom-square
        this.bottomBottomRight = null
        
        //Square to the bottom-right diagonal of the right-square
        this.rightBottomRight = null

        //Square to the top-right diagonal of the right-square
        this.rightTopRight = null

    }
}
